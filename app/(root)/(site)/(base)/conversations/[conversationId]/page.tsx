import ConversationHeader from "@/components/shared/ConversationHeader";

interface IParams {
    conversationId: string;
  }
  
  const ConversationId = async ({ params }: { params: IParams }) => {

    const { conversationId } = params;

    console.log(conversationId)
  
    return (
      <div>
        <ConversationHeader conversationId={conversationId} />
      </div>
    );
  }

export default ConversationId;