import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect("/recents");

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
    <main className="mx-auto flex max-w-3xl flex-col justify-start bg-light-4 px-10 py-20">
      <h1 className="head-text">Onboarding</h1>

      <p className="text-base-regular mt-3">
        Complete your profile, to use Anuvaad Sangam
      </p>

      <section className="bg-dark-2 mt-9 p-10">
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
}

export default Page;