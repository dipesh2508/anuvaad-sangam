import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Chat from "@/components/shared/Chat";
import Image from "next/image";
import avatar from "@/assets/test/avatar.svg";
import { ChatData } from "@/lib/example/chat";
import Recents from "@/components/cards/Recents";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";

const Page = async () => {
  const user = await currentUser();
  if(!user){
    redirect("/sign-in");
  }

  const userData = await fetchUser(user.id);

  if (!userData) {
    redirect("/onboarding");
  }
  return (
    <div className="grid h-[90vh] w-full grid-cols-12">
      <div className="col-span-9">
        <Chat />
      </div>
      <div className="col-span-3 h-[90vh] overflow-scroll overflow-x-hidden flex flex-col items-center border-l border-l-primary-3 pb-8">
        <div className="mt-6 flex h-36 w-36 flex-col content-center justify-center gap-4">
          <Image src={userData.image} alt="avatar" height={120} width={120} className="mx-auto rounded-full" />
          <h2 className="text-center text-xl font-medium">Dipesh Ranjan</h2>
        </div>
        <div className=" mt-4 h-[1px] w-10/12 bg-primary-3"></div>
        <div className="mt-4 w-full px-7">
          <h3 className=" font-primary text-lg font-medium">Last Chats</h3>
          <div className="flex flex-col gap-2 mt-2 mb-12">

          {ChatData.map((chat) => (
            <Recents
            key={chat.id}
            id={chat.id}
            name={chat.name}
            message={chat.message}
            time={chat.time}
            avatar={chat.avatar}
            />
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
