import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { MessageCirclePlus, MessageCircleReply, Router } from "lucide-react";
import { addFriendByUsername } from "@/lib/actions/user.actions";
import { redirect, usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { findChat } from "@/lib/actions/chat.actions";
import { useRouter } from "next/navigation";
import Link from "next/link";


const ContactCard = ({
  image,
  name,
  bio,
  username,
  id,
  userId,
  OtherId
}: {
  image: string;
  name: string;
  bio: string;
  username: string;
  id: string;
  userId: string;
  OtherId: string;
}) => {
  const pathname = usePathname();
  const router = useRouter();
  async function onClick () {
    const link = await findChat(id, userId);
    router.push(`/conversations/${link}`);
  }

  return (
    <Card className="w-full">
      <CardHeader className="overflow-hidden px-2 py-3">
        <div className="grid grid-cols-6 items-center gap-2">
          <Link href={`/profile/${OtherId}`}>
          <Image
            src={image}
            width={40}
            height={40}
            alt="avatar"
            className="col-span-1 h-10 w-10 rounded-full"
            />
            </Link>
          <div className="col-span-4">
            <CardTitle className="text-xl">
              {name}{" "}
              <span className="col-span-1 flex-wrap text-xs">@{username}</span>
            </CardTitle>
            <CardDescription className="text-sm">{bio}</CardDescription>
          </div>
          <div>
          <Button size={"sm"} onClick={onClick}>
                <MessageCircle size={16} />
              </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ContactCard;
