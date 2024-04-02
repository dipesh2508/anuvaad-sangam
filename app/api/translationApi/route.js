// import { type NextRequest } from "next/server";
// const { Translate } = require("@google-cloud/translate").v2;

// const projectId = "lang-chat-412018";

// const translate = new Translate({
//   projectId,
// });

// export async function POST(req: NextRequest) {
//   try {
//     const { text, target } = req.body as any;
//     console.log(text, " ", target);
//     let response = await translate.translate(text, target);
//     // Extract and return the translated text
//     const translatedText = response.translations[0].translatedText;
//     return Response.json(translatedText);
//   } catch (error: any) {
//     console.log(error);
//   }
// }

import { TranslationServiceClient } from "@google-cloud/translate";

const API = async (text, target) => {
  // Instantiates a client
  const translationClient = new TranslationServiceClient();
  const location = "global";

  // Define translateText function to handle translation
  async function translateText() {
    try {
      // Construct translation request
      const request = {
        parent: `projects/${JSON.parse(process.env.CREDENTIALS).project_id}/locations/${location}`,
        contents: [text], // Pass the text to be translated as an array
        mimeType: "text/plain", // Specify the MIME type of the text
        sourceLanguageCode: "auto", // Automatically detect source language
        targetLanguageCode: target, // Specify the target language
      };

      // Perform translation request
      const [response] = await translationClient.translateText(request);

      // Extract and return the translated text
      return response.translations[0].translatedText;
    } catch (error) {
      console.error("Error translating text:", error);
      throw error; // Rethrow the error for handling in the caller function
    }
  }

  try {
    // Call the translateText function to perform translation
    const translatedText = await translateText();

    // Return the translated text
    return translatedText;
  } catch (error) {
    // Handle errors here or let them propagate to the caller
    throw error;
  }
};

module.exports = { API };
