"use server";

import { connectToDB } from "../mongoose";
import { User } from "@/lib/models/user.model";
import { revalidatePath } from "next/cache";

export async function fetchUser(userId: string) {
  try {
    connectToDB();

    return await User.findOne({ id: userId });
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
}: Params): Promise<void> {
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

interface IUser {
  username: string;
  id: string;
}

export async function addFriendByUsername({
  username,
  id,
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
  } catch (error: any) {
    throw new Error(`Failed to add user.\nERROR:${error.message}`);
  }
}

export async function getAllUsersByUsername(searchParam: String) {
  try {
    const searchedUsers = await User.aggregate([
      {
        $addFields: {
          Users: {
            $regexFindAll: {
              input: "$username",
              regex: `^${searchParam}`,
            },
          },
        },
      },
      {
        $limit: 10,
      },
      {
        $project: {
          result: 1,
        },
      },
    ]);

    if (!searchedUsers) {
      return "No User found!";
    }

    return searchedUsers;
  } catch (error: any) {
    throw new Error(`Failed to Search user.\nERROR:${error.message}`);
  }
}
