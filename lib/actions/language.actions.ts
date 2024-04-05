"use server"

import { User } from "../models/user.model";
import { connectToDB } from "../mongoose";
import { revalidatePath } from "next/cache";


export async function updateLanguage( userId:string, language:string, pathname:string) {
  try {
    connectToDB();

    const user = await User.findOneAndUpdate(
      { id: userId },
      { language: language },
    );

    if (!user) {
      return null;
    }

    if (user.language === language) {
      return null;
    }

    user.language = language;

    await user.save();

    revalidatePath(pathname);
  } catch (error: any) {
    throw new Error(`Failed to Update language.\nERROR:${error.message}`);
  }
}
