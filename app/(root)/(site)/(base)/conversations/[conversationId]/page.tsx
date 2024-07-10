import ConversationBody from "@/components/shared/ConversationBody";
import ConversationForm from "@/components/forms/ConversationForm";
import ConversationHeader from "@/components/shared/ConversationHeader";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";

interface IParams {
    conversationId: string;
  }
  
  const ConversationId = async ({ params }: { params: IParams }) => {

    const { conversationId } = params;

    console.log(conversationId);

    const user = await currentUser();
    if(!user){
      redirect("/sign-in");
    }
  
    const userData = await fetchUser(user.id);
  
    if (!userData) {
      redirect("/onboarding");
    }
  
    return (
      <div>
        <ConversationHeader conversationId={conversationId} />
        <ConversationBody conversationId={conversationId} userData={userData} />
        <ConversationForm conversationId={conversationId} senderId={userData._id} />
      </div>
    );
  }

export default ConversationId;