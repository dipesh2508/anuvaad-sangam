interface Lanugage {
    id: number;
    language: string;
    selector: string;
}

export const languages: Lanugage[] = [
    {
        id: 1,
        language: "English",
        selector: 'en'
    },
    {
        id: 2,
        language: "Hindi",
        selector: 'hi'
    },
    {
        id: 3,
        language: "Spanish",
        selector: 'es'
    },
    {
        id: 4,
        language: "French",
        selector: 'fr'
    },
    {
        id: 5,
        language: "German",
        selector: 'de'
    }
]