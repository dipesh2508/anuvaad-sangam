"use server";

import { connectToDB } from "@/lib/mongoose";
import { User } from "@/lib/models/user.model";
import { revalidatePath } from "next/cache";
import mongoose from "mongoose";

export async function fetchUser(userId: string) {
  try {
    connectToDB();

    return await User.findOne({ id: userId });
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

export async function fetchUserById(userId: string) {
  try {
    connectToDB();

    return await User.findById(userId);
  } catch (error: any) {
    throw new Error(`Failed to fetch user: ${error.message}`);
  }
}

interface Params {
  userId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  language: string;
  email: string;
  path: string;
}

export async function updateUser({
  userId,
  bio,
  name,
  path,
  username,
  image,
  language,
  email,
}: Params) {
  try {
    connectToDB();

    await User.findOneAndUpdate(
      { id: userId },
      {
        username: username.toLowerCase(),
        name,
        bio,
        image,
        email,
        language,
        onboarded: true,
      },
      { upsert: true },
    );

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user.\nERROR: ${error.message}`);
  }
}

export async function fetchContacts(userId: string) {
  try {
    connectToDB();

    const user = await User.findById(userId);

    if (!user) {
      throw new Error(`No user found.`);
    }
    const contact = await User.find({ _id: { $in: user.contacts } });

    return contact;
  } catch (error: any) {
    throw new Error(`Failed to fetch contacts.\nERROR:${error.message}`);
    return [];
  }
}

interface IUser {
  username: string;
  id: string;
  pathname: string;
}

export async function addFriendByUsername({
  username,
  id,
  pathname,
}: IUser): Promise<void> {
  try {
    connectToDB();

    const OtherUser = await User.findOne({ username });

    if (!OtherUser) {
      throw new Error(`No user Found!`);
    }

    const user = await User.findById(id);

    if (!user) {
      throw new Error(`No active session`);
    }

    OtherUser.contacts.push(user._id);

    await user.contacts.push(OtherUser._id);

    await user.save();
    await OtherUser.save();

    revalidatePath(pathname);
  } catch (error: any) {
    throw new Error(`Failed to add user.\nERROR:${error.message}`);
  }
}

export async function findRandomUsers(userId: string) {
  try {
    connectToDB();

    const users = await User.find({ _id: { $ne: userId } });

    if (!users) {
      console.error("No user found.");
    }

    return users;
  } catch (error: any) {
    throw new Error(`Failed to fetch random users.\nERROR:${error.message}`);
    return [];
  }
}

export async function getAllUsersByUsername(
  userId: string,
  searchParam: string,
) {
  try {
    const searchedUsers = await User.aggregate([
      {
        $match: {
          username: {
            $regex: `${searchParam}`,
            $options: "i",
          },
        },
      },
      {
        $match: {
          _id: {
            $ne: new mongoose.Types.ObjectId(userId), // Replace the hard-coded ObjectId value with a valid string representation
          },
        },
      },
      {
        $limit: 10,
      },
    ]);

    if (!searchedUsers) {
      return null;
    }

    return searchedUsers;
  } catch (error: any) {
    throw new Error(`Failed to Search user.\nERROR:${error.message}`);
  }
}

export async function removeFriend(
  curUserId: string,
  unFriendUserId: string,
  pathname: string,
) {
  try {
    connectToDB();

    const curUser = await User.findByIdAndUpdate(
      curUserId,
      {
        $pull: {
          contacts: unFriendUserId,
        },
      },
      {
        new: true,
      },
    );

    const unFriendUser = await User.findByIdAndUpdate(
      unFriendUserId,
      {
        $pull: {
          contacts: curUserId,
        },
      },
      {
        new: true,
      },
    );

    await curUser.save();
    await unFriendUser.save();

    revalidatePath(pathname);

    return "Successfully remove the friend.";
  } catch (error: any) {
    throw new Error(`Failed to remove friend.\nERROR:${error.message}`);
  }
}