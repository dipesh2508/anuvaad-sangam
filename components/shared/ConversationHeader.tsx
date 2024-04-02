import { fetchChats } from "@/lib/actions/chat.actions";
import { fetchUser, fetchUserById } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Image from 'next/image';

const ConversationHeader = async ({conversationId}: {conversationId: string;}) => {

    const conversation = await fetchChats(conversationId);

    const user = await currentUser();
    if(!user){
      redirect("/sign-in");
    }
  
    const userData = await fetchUser(user.id);
  
    if (!userData) {
      redirect("/onboarding");
    }

    const otherUserId = userData._id.toString() === conversation.user1.toString() ? conversation.user2 : conversation.user1;

    // console.log(otherUserId)

    const otherUser = await fetchUserById(otherUserId);
    
  return (
    <div 
      className="
        w-full 
        flex 
        border-b-[1px] 
        sm:px-4 
        py-2 
        px-4 
        lg:px-6 
        justify-between 
        items-center 
        shadow-lg
        rounded-lg
        mt-4
        bg-light-2
      "
    >
      <div className="flex items-center gap-3">

        <Image src={otherUser.image} alt={otherUser.name} width={48} height={48} className="rounded-full" />
        <div className="flex flex-col">
          <h3 className="font-semibold text-lg">{otherUser.name}</h3>
          <div className="text-sm font-light text-neutral-500">
            {otherUser.bio}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConversationHeader