import { type NextRequest } from "next/server";
const { Translate } = require("@google-cloud/translate").v2;

const translate = new Translate({
  key: process.env.GOOGLE_API_KEY,
});

export async function POST(req: NextRequest) {
  const { text, target } = req.body as any;
  let response = await translate.translate(text, target);
  // Extract and return the translated text
  const translatedText = response.translations[0].translatedText;
  return Response.json(translatedText);
}
