"use server";

import mongoose from "mongoose";
import { Chat, IChat } from "../models/chat.model";
import { IMessage, Message } from "../models/message.model";
import { User, IUser } from "../models/user.model";
import { connectToDB } from "../mongoose";
import { translation } from "./translate.actions";

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

    const chat = await Chat.findById(conversationId); //old

    // const users = [chat.user1, chat.user2];
    // users.sort();
    // const sortedUser1 = users[0];
    // const sortedUser2 = users[1];

    const user1 = await User.findById(chat.user1);
    const user2 = await User.findById(chat.user2);

    const body1 = await translation(body, user1.language);
    const body2 = await translation(body, user2.language);

    const message = await Message.create({
      body1,
      body2,
      senderId,
      language1: user1.language,
      language2: user2.language,
    });

    // const chat = await Chat.findById(conversationId); //old

    chat.messages.push(message); //old

    await chat.save(); //old

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

interface RecentChats {
  lastestMessage: IMessage;
  chat: IChat;
  partner: IUser;
}

export async function fetchRecents(userId: string) {
  try {
    connectToDB();

    const user = await User.findById(userId);

    if (!user) {
      return null;
    }

    const chatsIds = user.chats;

    const chats = await Chat.find({ _id: { $in: chatsIds } });
    const arr: RecentChats[] = [];
    for (let i = 0; i < chats.length; i++) {
      const chat = chats[i];
      const partnerId =
        chat.user1.toString() === userId.toString() ? chat.user2 : chat.user1;
      const lastestMessageId = chat.messages[chat.messages.length - 1];
      const lastestMessage = await Message.findById(lastestMessageId);
      const partner = await User.findById(partnerId);
      arr.push({
        lastestMessage,
        partner,
        chat,
      });
    }

    const sortedChats = arr.sort((chatA, chatB) => {
      // Get timestamps of latest messages
      const timestampA = chatA.lastestMessage.createdAt.getTime();
      const timestampB = chatB.lastestMessage.createdAt.getTime();

      // Descending order for latest messages first
      return timestampB - timestampA;
    });

    return sortedChats;
  } catch (e: any) {
    throw new Error(`Failed to fetch recents.\nERROR:${e.message}`);
  }
}
