import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPaperAirplane } from "react-icons/hi2";
import { Button } from "../ui/button";

const ConversationForm = ({
    conversationId
}:{
    conversationId: string;
}) => {

    const onSubmit: SubmitHandler<FieldValues> = (data) => {

    }

    // const {
    //     register,
    //     handleSubmit,
    //     setValue,
    //     formState: { errors },
    //   } = useForm<FieldValues>
    //   ({
    //     defaultValues: {
    //       message: "",
    //     },
    //   });

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
          <form
        // onSubmit={onSubmit}
        className="flex w-full items-center gap-2 lg:gap-4"
      >
<div className="relative w-full">
      <input
        // id={id}
        // type={type}
        // autoComplete={id}
        // {...register(id, { required })}
        placeholder="Type a message..."
        className="
          text-black
          font-light
          py-2
          px-4
          bg-neutral-100 
          w-full 
          rounded-full
          focus:outline-none
        "
      />
    </div>
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
  </div>
  )
}

export default ConversationForm