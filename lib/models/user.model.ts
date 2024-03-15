import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
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
    },
    {
        timestamps: true,
    },
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
