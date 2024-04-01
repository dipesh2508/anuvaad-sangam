"use server";

import mongoose from "mongoose";
import { Chat } from "../models/chat.model";
import { Message } from "../models/message.model";
import { User } from "../models/user.model";
import { connectToDB } from "../mongoose";

export async function fetchChats(chatId: string) {
  try {
    connectToDB();

    const chats = await Chat.findById(chatId);

    if (!chats) {
      return null;
    }

    return chats;
  } catch (error: any) {
    throw new Error(`Failed to add user.\nERROR:${error.message}`);
  }
}

export async function findChat(curUserId: string, partnerUserId: string) {
  try {
    connectToDB();

    const existingChats = await Chat.findOne({
      $or: [
        { user1: curUserId, user2: partnerUserId },
        { user1: partnerUserId, user2: curUserId },
      ],
    });

    if (!existingChats) {
      const newChat = await Chat.create({
        messages: [],
        user1: curUserId,
        user2: partnerUserId,
      });

      const curUser = await User.findById(curUserId);
      const partnerUser = await User.findById(partnerUserId);

      curUser.chats.push(newChat._id);
      partnerUser.chats.push(newChat._id);

      await curUser.save();
      await partnerUser.save();

      await newChat.save();
      return newChat._id;
    }

    return existingChats._id;
  } catch (error: any) {
    throw new Error(`Failed to find chat.\nERROR:${error.message}`);
  }
}

export async function sendMessage(
  senderId: string,
  conversationId: string,
  body: string,
) {
  try {
    connectToDB();

    const message = await Message.create({
      body1: body,
      body2: body,
      senderId,
      language1: "en",
      language2: "en",
    });

    const chat = await Chat.findById(conversationId);

    chat.messages.push(message);

    await chat.save();

    return chat.messages; //Todo
  } catch (error: any) {
    throw new Error(`Failed to send message.\nERROR:${error.message}`);
  }
}

export async function fetchMessages(conversationId: string) {
  try {
    connectToDB();

    const chat = await Chat.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(conversationId),
        },
      },
      {
        $lookup: {
          from: "messages",
          localField: "message",
          foreignField: "_id",
          as: "allMessages",
        },
      },
    ]);

    if (!chat) {
      console.log(`No chat with conversation id ${conversationId} found`);
      return null;
    }

    return chat;
  } catch (error: any) {
    throw new Error(`Failed to fetch messages.\nERROR:${error.message}`);
  }
}
