"use server"

import { User } from "../models/user.model";
import { connectToDB } from "../mongoose";
import { revalidatePath } from "next/cache";

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
