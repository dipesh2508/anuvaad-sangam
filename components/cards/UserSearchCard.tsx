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
import { MessageCirclePlus, MessageCircleReply } from "lucide-react";
import { addFriendByUsername } from "@/lib/actions/user.actions";
import { usePathname } from "next/navigation";

const UserSearchCard = ({
  image,
  name,
  bio,
  username,
  contacts,
  id
}: {
  image: string;
  name: string;
  bio: string;
  username: string;
  contacts: string[];
  id: string;
}) => {

    const pathname = usePathname();

  return (
    <Card className="">
      <CardHeader className="overflow-hidden px-2 py-3">
        <div className="grid grid-cols-6 items-center gap-2">
          <Image
            src={image}
            width={40}
            height={40}
            alt="avatar"
            className="col-span-1 h-10 w-10 rounded-full"
          />
          <div className="col-span-4">
            <CardTitle className="text-xl">
              {name}{" "}
              <span className="col-span-1 flex-wrap text-xs">@{username}</span>
            </CardTitle>
            <CardDescription className="text-sm">{bio}</CardDescription>
          </div>
          {!contacts.includes(id) && (
            <div className="">
              <Button size={"sm"} onClick={async () => {
              await addFriendByUsername({username, id, pathname});
            }}>
                <MessageCirclePlus size={16} />
              </Button>
            </div>
          )}
          {contacts.includes(id) && (
            <div className="">
              <Button size={"sm"} variant={"secondary"}>
                <MessageCircleReply size={16} />
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
    </Card>
  );
};

export default UserSearchCard;
