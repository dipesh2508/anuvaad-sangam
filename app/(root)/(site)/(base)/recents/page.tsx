import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import Chat from "@/components/shared/Chat";
import Image from "next/image";
import Recents from "@/components/cards/Recents";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";
import { fetchRecents } from "@/lib/actions/chat.actions";

const Page = async () => {
  const user = await currentUser();
  if(!user){
    redirect("/sign-in");
  }

  const userData = await fetchUser(user.id);

  if (!userData) {
    redirect("/onboarding");
  }

  const recentChats = await fetchRecents(userData._id);

  if(!recentChats){
    return null;
  }



  return (
    <div className="grid h-[90vh] w-full grid-cols-12">
      <div className="col-span-9">
        <Chat />
      </div>
      <div className="col-span-3 h-[90vh] overflow-scroll overflow-x-hidden flex flex-col items-center border-l border-l-primary-3 pb-8">
        <div className="mt-6 flex h-36 w-36 flex-col content-center justify-center gap-4">
          <Image src={userData.image} alt="avatar" height={120} width={120} className="mx-auto rounded-full" />
          <h2 className="text-center text-xl font-medium">{userData.name}</h2>
        </div>
        <div className=" mt-4 h-[1px] w-10/12 bg-primary-3"></div>
        <div className="mt-4 w-full px-7">
          <h3 className=" font-primary text-lg font-medium">Last Chats</h3>
          <div className="flex flex-col gap-2 mt-2 mb-12">

            {recentChats.length === 0 && <p className="mt-4 font-primary text-primary-4">No recent chats</p>}


          {recentChats.map((chat, index) => (
            <Recents
            key={index}
            name={chat.partner.name}
            message={userData._id.toString() === chat.chat.user1.toString() ? chat.lastestMessage.body1 : chat.lastestMessage.body2}
            time={chat.lastestMessage.createdAt.toLocaleTimeString().replace(/:\d+ /, ' ')}
            avatar={chat.partner.image}
            conversationId={chat.chat._id.toString()}
            />
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
