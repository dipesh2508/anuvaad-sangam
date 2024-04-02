import { type NextRequest } from "next/server";
const { Translate } = require("@google-cloud/translate").v2;


const projectId = "lang-chat-412018";

const translate = new Translate({
  projectId,
  key: process.env.GOOGLE_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { text, target } = await req.json();
    console.log(text, " ", target);
    let response = await translate.translate(text, target);
    // Extract and return the translated text
    const translatedText = response.translations[0].translatedText;
    return Response.json(translatedText);
  } catch (error: any) {
    console.log(error);
  }
}
