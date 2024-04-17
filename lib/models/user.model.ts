import mongoose from "mongoose";
import { IChat } from "@/lib/models/chat.model";
export interface IUser {
  _id: mongoose.ObjectId
  id: string;
  name: string;
  username: string;
  bio: string;
  image: string;
  email: string;
  chats: IChat[];
  contacts: string[];
  language: string;
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
    onboarded: Boolean,
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
