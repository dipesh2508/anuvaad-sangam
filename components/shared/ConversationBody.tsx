"use client";

import { useRef } from "react";
import MessageBox from "./MessageBox";
const ConversationBody = ({conversationId}:{
    conversationId: string;
}) => {

    const messages : any[] = [];
    const bottomRef = useRef<HTMLDivElement>(null);

    return (
      <div className="flex-1 overflow-y-auto h-[70vh]">
        <div ref={bottomRef} className="pt-24">
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