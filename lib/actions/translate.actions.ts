"use server";
import axios from "axios";

export async function translation(message: string, language: string) {
  try {
    const response = await axios.post(
      `http://localhost:8000/translate?text=${message}&target=${language}`,
    );

    if (response.data) return response.data.data;
  } catch (error: any) {
    throw new Error(`Unable to translate text.\nError:${error}`);
  }
}
