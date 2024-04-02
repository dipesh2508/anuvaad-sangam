import { TranslationServiceClient } from '@google-cloud/translate';

export async function API(text, target) {

    const translationClient = new TranslationServiceClient();
    const location = 'global';

    try {
        const request = {
            parent: `projects/${JSON.parse(process.env.CREDENTIALS).project_id}/locations/${location}`,
            contents: [text],
            mimeType: 'text/plain',
            sourceLanguageCode: 'auto',
            targetLanguageCode: target,
        };

        const [response] = await translationClient.translateText(request);

        return response.translations[0].translatedText;
    } catch (error) {
        console.error('Error translating text:', error);
        throw error;
    }
};