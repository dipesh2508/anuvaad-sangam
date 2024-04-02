import { type NextRequest } from "next/server";
const { Translate } = require("@google-cloud/translate").v2;


const projectId = "lang-chat-412018";

const translate = new Translate({
  projectId
});

export async function POST(req: NextRequest) {
  const { text, target } = req.body as any;
  let response = await translate.translate(text, target);
  // Extract and return the translated text
  const translatedText = response.translations[0].translatedText;
  return Response.json(translatedText);
}
