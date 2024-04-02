import India from '@/assets/flags/India.svg';
import Spain from '@/assets/flags/Spain_it.svg';
import UK from '@/assets/flags/United Kingdom_it.svg';
import France from '@/assets/flags/France_it.svg';
import Germany from '@/assets/flags/germany_it.svg'
import { BadgeIndianRupeeIcon } from 'lucide-react';

export interface Language {
  id: number;
  key: string;
  value: string;
  image: any;
}

export const languages: Language[] = [
    {
        id: 1,
        key: "English",
        value: 'en',
        image: UK
    },
    {
        id: 2,
        key: "Hindi",
        value: 'hi',
        image: India
    },
    {
        id: 3,
        key: "Spanish",
        value: 'es',
        image: Spain
    },
    {
        id: 4,
        key: "French",
        value: 'fr',
        image: France
    },
    {
        id: 5,
        key: "German",
        value: 'de',
        image: Germany
    }
]