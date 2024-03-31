"use server";

import { connectToDB } from "@/lib/mongoose";
import { User } from "@/lib/models/user.model";
import { revalidatePath } from "next/cache";
import { languages } from "../constants/language";

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

    //return array of objects of all contacts of the user
    return await User.find({ _id: { $in: user.contacts } });
  }
  catch (error: any) {
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

export async function getAllUsersByUsername(searchParam: string) {
  try {
    const searchedUsers = await User.aggregate([
      {
        $match: {
          username: {
            $regex: `^${searchParam}$`,
            $options: "i",
          },
        },
      },
      {
        $limit: 10,
      }
    ]);

    if (!searchedUsers) {
      return "No User found!";
    }

    return searchedUsers;
  } catch (error: any) {
    throw new Error(`Failed to Search user.\nERROR:${error.message}`);
  }
}

interface IUpdateLanguage {
  userId: string;
  language: string;
}

export async function updateLanguage({ userId, language }: IUpdateLanguage) {
  try {
    connectToDB();

    const user = await User.findOneAndUpdate(
      { id: userId },
      { language: language },
    );

    if (!user) {
      return "No User Found.";
    }

    if (user.language === language) {
      return "Choose different language from the previous one.";
    }

    user.language = language;

    await user.save();

    revalidatePath("/language");
    
    return "Language Updated Successfully.";
  } catch (error: any) {
    throw new Error(`Failed to Update language.\nERROR:${error.message}`);
  }
}
