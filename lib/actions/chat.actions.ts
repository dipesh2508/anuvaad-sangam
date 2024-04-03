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

    const chat = await Chat.findById(conversationId); //old

    if(!chat){
      return null;
    }

    const user1Id = chat.user1;
    const user2Id = chat.user2;

    const receiverId = senderId.toString() === user1Id.toString() ? user2Id : user1Id;
    console.log(receiverId)

    const sender = await User.findById(senderId);
    const receiver = await User.findById(receiverId);

    await sender.recentChats.push(receiverId);
    await receiver.recentChats.push(senderId);
    console.log("before message saving")

    chat.messages.push(message); //old

    console.log("after message saving")
    
    await chat.save(); //old

    console.log("after chat saving")

    await sender.save();
    await receiver.save();

    return chat.messages; //Todo
  } catch (error: any) {
    throw new Error(`Failed to send message.\nERROR:${error.message}`);
  }
}

export async function fetchMessages(conversationId: string) {
  try {
    connectToDB();

    const chat = await Chat.findById(conversationId);

    if (!chat) {
      return null;
    }

    const messagesIds = chat.messages;

    // const messages = await Message.find({ _id: { $in: messagesIds } });

    const messages = await Message.aggregate([
      {
        $match: {
          _id: {
            $in: messagesIds,
          },
        },
      },
      {
        $sort: {
          createdAt: 1,
        },
      },
    ]);

    return messages;
  } catch (error: any) {
    throw new Error(`Failed to fetch messages.\nERROR:${error.message}`);
  }
}
