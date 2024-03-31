import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";

const Page = async () => {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || "",
    bio: userInfo?.bio || "",
    image: userInfo?.image || user?.imageUrl,
    email: userInfo?.email || user.emailAddresses[0].emailAddress,
    language: userInfo?.language || "",
  };
  return (
  <div className="flex items-center justify-center w-[85vw]">
  <div className="mt-9  rounded-xl bg-primary-1 p-10 shadow-2xl mx-auto">
  <AccountProfile user={userData} btnTitle="Continue" />
</div>
</div>);
};

export default Page;