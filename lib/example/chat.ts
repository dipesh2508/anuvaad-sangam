import Avatar from '@/assets/test/user-circle.svg'

interface ChatData {
    id: number;
    name: string;
    message: string;
    time: string;
    avatar: string;
}

export const ChatData = [
    {
        id: 1,
        name: "Isheta Aggarwal",
        message: "Mujhe nhi pta, tm dekhlo",
        time: "12:00 PM",
        avatar: Avatar
    },
    {
        id: 2,
        name: "Mohd Shariq",
        message: "What's up?",
        time: "11:00 AM",
        avatar: Avatar
    },
    {
        id: 3,
        name: "Rajat Srivastava",
        message: "Bohot kaam hai Dipesh Bhai",
        time: "10:00 AM",
        avatar: Avatar
    },
    {
        id: 4,
        name: "Ashutosh Kumar",
        message: "I'm usually free",
        time: "9:00 AM",
        avatar: Avatar
    },
    {
        id: 5,
        name: "Kislay Gupta",
        message: "Seedhe Maut ke bina kya jeevan?",
        time: "8:00 AM",
        avatar: Avatar
    },
    {
        id: 6,
        name: "Ayushi Sinha",
        message: "Ye bohot acha hai",
        time: "7:00 AM",
        avatar: Avatar
    }
]