import mongoose, { ObjectId } from "mongoose";
import { IUser } from "./user.model";
export interface IMessage {
  _id: ObjectId;
  body1: string;
  body2: string;
  senderId: IUser;
  language1: string;
  language2: string;
  createdAt: Date;
}

const messageSchema = new mongoose.Schema<IMessage>(
  {
    body1: {
      type: String,
    },
    body2: {
      type: String,
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    language1: {
      type: String,
      default: "en",
    },
    language2: {
      type: String,
      default: "en",
    },
  },
  {
    timestamps: true,
  },
);

export const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);
