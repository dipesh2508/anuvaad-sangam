import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

import Image from "next/image";

interface Props {
  id: number;
  name: string;
  message: string;
  time: string;
  avatar: string;
}

const Recents = ({ id, name, message, time, avatar }: Props) => {
  return (
    <Card className="">
      <CardHeader className="px-2 py-3">
        <div className="grid grid-cols-6 items-center gap-3">
          <Image src={avatar} alt="avatar" className="col-span-1 h-10 w-10 rounded-full" />
          <div className="col-span-4">
            <CardTitle className="text-xl">{name}</CardTitle>
            <CardDescription className="text-sm">{message}</CardDescription>
          </div>
          <div className="text-xs col-span-1">{time}</div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default Recents;
