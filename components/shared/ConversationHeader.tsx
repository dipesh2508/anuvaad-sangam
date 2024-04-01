import { fetchChats } from "@/lib/actions/chat.actions";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

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

    const otherUser = userData._id === conversation.user1 ? conversation.user1 : conversation.user2;

    
  return (
    <div>
        {otherUser}
    </div>
  )
}

export default ConversationHeader