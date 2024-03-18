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
        time: "12:00",
        avatar: Avatar
    },
    {
        id: 2,
        name: "Mohd Shariq",
        message: "Acha btao kya kar rhe ho",
        time: "11:57",
        avatar: Avatar
    },
    {
        id: 3,
        name: "Rajat Srivastava",
        message: "Bohot kaam hai dipesh bhai",
        time: "11:40",
        avatar: Avatar
    },
    {
        id: 4,
        name: "Ashutosh Kumar",
        message: "Aaj kitte baje ghar ayega",
        time: "11:35",
        avatar: Avatar
    },
    {
        id: 5,
        name: "Kislay Gupta",
        message: "Tera bhai seedhe maut",
        time: "11:00",
        avatar: Avatar
    },
    {
        id: 6,
        name: "Ayushi Sinha",
        message: "Ye bohot acha hai",
        time: "10:40",
        avatar: Avatar
    }
]