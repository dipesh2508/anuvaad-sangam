import mongoose from "mongoose";
import { IChat } from "./chat.model";
import { boolean } from "zod";

export interface IUser {
  id: string;
  name: string;
  username: string;
  bio: string;
  image: string;
  email: string;
  language: string;
  chats: IChat[];
  contacts: IChat;
  onboarded: boolean;
}

const userSchema = new mongoose.Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    bio: {
      type: String,
      default: "",
    },
    image: String,
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    chats: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat",
      },
    ],
    contacts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    language: {
      type: String,
      default: "en",
    },
    onboarded: boolean,
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
