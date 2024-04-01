"use server";

import { Chat } from "../models/chat.model";
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

      await newChat.save();
      return newChat._id;
    }

    return existingChats._id;
  } catch (error: any) {
    throw new Error(`Failed to find chat.\nERROR:${error.message}`);
  }
}
