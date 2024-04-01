import { translate, Translate } from "free-translate";

export async function translateApi(text: string, translateTo: string) {
    const translatedText = await translate(text, {
        to: translateTo as Translate['to'],
    });

    return translatedText;
}
