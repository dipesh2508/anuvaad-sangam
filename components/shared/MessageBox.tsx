import clsx from "clsx";
import Image from "next/image";
import { format } from "date-fns";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";

const MessageBox = async ({ isLast, data }: { isLast: boolean; data: any }) => {

  const user = await currentUser();
  if(!user){
    redirect("/sign-in");
  }

  const userData = await fetchUser(user.id);

  if (!userData) {
    redirect("/onboarding");
  }


  const isOwn = true;
  
  const container = clsx("flex gap-3 p-4", isOwn && "justify-end");
  const avatar = clsx(isOwn && "order-2");
  const body = clsx("flex flex-col gap-2", isOwn && "items-end");

  const message = clsx(
    "text-sm w-fit overflow-hidden",
    isOwn ? "bg-primary-4 text-white" : "bg-gray-200",
    data.image ? "rounded-md p-0" : "rounded-full py-2 px-3",
  );

  return (
    <div className={container}>
      <div className={avatar}>
        <Image src={userData.image} width={36} height={36} className="rounded-full" alt={userData.name} />
      </div>
      <div className={body}>
        <div className="flex items-center gap-1">
          {/* <div className="text-sm text-gray-500">{data.sender.name}</div> */}
          <div className="text-xs text-gray-400">
            {format(new Date(data.createdAt), "p")}
          </div>
        </div>
        <div className={message}>
          {data.image ? (
            <Image
              alt="Image"
              height={288}
              width={288}
              src={userData.image}
              className="translate cursor-pointer object-cover transition hover:scale-110"
            />
          ) : (
            <div>{data.body1}</div>
          )}
        </div>
        {isLast && (
          // && isOwn && seenList.length > 0 &&
          <div className="fon-light text-xs text-gray-500">
            {/* {`Seen by ${seenList}`} */}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBox;
