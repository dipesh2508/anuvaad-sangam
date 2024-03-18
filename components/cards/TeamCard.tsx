import { StaticImageData } from "next/image";
import Image from "next/image";

interface Props {
  avatar: StaticImageData;
  name: string;
  role: string;
}

const TeamCard = ({ avatar, name, role }: Props) => {
  return (
    <div className="flex w-96 flex-row gap-4 rounded-2xl border-2 border-primary-2 bg-primary-1 px-4 py-4">
      <div className="h-24 w-24 rounded-full bg-light-4 flex justify-center">
        <Image src={avatar} alt={name} className="rounded-full" />
      </div>
      <div className="item-center flex flex-col justify-center ">
        <h3 className="text-xl font-medium">{name}</h3>
        <p className="text-sm">{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
