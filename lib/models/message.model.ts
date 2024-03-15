import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    body1: {
      type: String
    },
    body2: {
      type: String
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
