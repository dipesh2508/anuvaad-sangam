import mongoose from "mongoose";
import { IUser } from "./user.model";
import { IMessage } from "./message.model";
export interface IChat {
  messages: IMessage[];
  user1: IUser;
  user2: IUser;
}

const chatSchema = new mongoose.Schema<IChat>(
  {
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
      },
    ],
    user1: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    user2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

export const Chat = mongoose.models.Chat || mongoose.model("Chat", chatSchema);
