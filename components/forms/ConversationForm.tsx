"use client";
import { HiPaperAirplane } from "react-icons/hi2";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageValidation } from "@/lib/validations/message";
import * as z from "zod";
import { Input } from "../ui/input";
import { sendMessage } from "@/lib/actions/chat.actions";
import { useRouter } from "next/navigation";
import { translation } from "@/lib/actions/translate.actions";
const ConversationForm = ({
  conversationId,
  senderId,
}: {
  conversationId: string;
  senderId: string;
}) => {

  const form = useForm({
    resolver: zodResolver(MessageValidation),
    defaultValues: {
      message: "",
    },
  });

  const router = useRouter();

  const onSubmitFunc = async (data: z.infer<typeof MessageValidation>) => {
    
    const text = data.message;
    
    const response = await translation(text, "es");

    await sendMessage(senderId, conversationId, response);

    form.reset();
    router.refresh();
  };
  return (
    <div
      className="
      flex 
      w-full 
      items-center 
      gap-2 
      border-t 
      bg-white 
      px-4 
      py-4 
      lg:gap-4
    "
    >
      {" "}
      <Form {...form}>
        <form
          className="flex w-full items-center gap-2 lg:gap-4"
          onSubmit={form.handleSubmit(onSubmitFunc)}
        >
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="relative w-full">
                <FormControl>
                  <Input
                    placeholder="Type a message..."
                    className="
                                w-full
                                rounded-full
                                bg-neutral-100
                                px-4
                                py-2 
                                font-light 
                                text-black
                                focus:outline-none
                              "
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="
                        cursor-pointer 
                        rounded-full 
                        p-2 
                        px-4
                        transition 
                      "
          >
            <HiPaperAirplane size={18} className="text-white" />
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ConversationForm;
