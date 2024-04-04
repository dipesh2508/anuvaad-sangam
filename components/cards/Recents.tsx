"use client"
import { MessageCircle } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
  name: string;
  message: string;
  time: string;
  avatar: string;
  conversationId: string;
}

const Recents = ({ name, message, time, avatar, conversationId }: Props) => {

  const router = useRouter();

  async function onClick () {
    router.push(`/conversations/${conversationId}`);
  }
  return (
    <Card className="">
      <CardHeader className="px-2 py-3">
        <div className="grid grid-cols-6 items-center gap-3">
          <Image src={avatar} alt="avatar" height={40} width={40} className="col-span-1 h-10 w-10 rounded-full" />
          <div className="col-span-4">
            <div className="flex flex-row items-center justify-between"><CardTitle className="text-xl">{name}</CardTitle>
            <div className="text-xs col-span-1">{time}</div>
            </div>
            
            <CardDescription className="text-sm">{message}</CardDescription>
          </div>
          
          <Button size={"sm"} onClick={onClick}>
                <MessageCircle size={16} />
              </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Recents;
