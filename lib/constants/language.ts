export interface Language {
  id: number;
  key: string;
  value: string;
}

export const languages: Language[] = [
    {
        id: 1,
        key: "English",
        value: 'en'
    },
    {
        id: 2,
        key: "Hindi",
        value: 'hi'
    },
    {
        id: 3,
        key: "Spanish",
        value: 'es'
    },
    {
        id: 4,
        key: "French",
        value: 'fr'
    },
    {
        id: 5,
        key: "German",
        value: 'de'
    }
]