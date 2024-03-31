import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "../ui/card";
const UserSearchCard = ({
    image,
    name,
    bio,
    username
    }: {
       image: string;
         name: string;
            bio: string;
                username: string;
}) => {
  return (
    <Card className="">
      <CardHeader className="px-2 py-3 overflow-hidden">
        <div className="grid grid-cols-6 items-center gap-3">
          <Image src={image} width={40} height={40}  alt="avatar" className="col-span-1 h-10 w-10 rounded-full" />
          <div className="col-span-4">
            <CardTitle className="text-xl">{name}           <span className="text-xs col-span-1 flex-wrap">@{username}</span></CardTitle>
            <CardDescription className="text-sm">{bio}</CardDescription>
          </div>

        </div>
      </CardHeader>
    </Card>
  )
}

export default UserSearchCard