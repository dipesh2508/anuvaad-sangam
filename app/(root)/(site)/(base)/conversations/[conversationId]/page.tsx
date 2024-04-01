interface IParams {
    conversationId: string;
  }
  
  const ConversationId = async ({ params }: { params: IParams }) => {

    const { conversationId } = params;

    console.log(conversationId)
  
    return (
      <div>
        <h1>Conversation Id: {conversationId}</h1>
      </div>
    );
  }

export default ConversationId;