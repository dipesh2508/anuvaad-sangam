
import { useRef } from "react";
import MessageBox from "./MessageBox";
import { fetchMessages } from "@/lib/actions/chat.actions";
const ConversationBody = async ({conversationId}:{
    conversationId: string;
}) => {

    const messages = await fetchMessages(conversationId);

    if(!messages){
        return <div>no message</div>
    }

    // const revMessages = messages.reverse()

    // const bottomRef = useRef<HTMLDivElement>(null);

    return (
      <div className="flex-1 overflow-y-auto h-[70vh]">
        <div 
        // ref={bottomRef}
         className="pt-24">
          {messages.map((message, i) => (
            <MessageBox
              isLast={i === messages.length - 1}
              key={message.id}
              data={message}
            />
          ))}
        </div>
      </div>
    );
}

export default ConversationBody