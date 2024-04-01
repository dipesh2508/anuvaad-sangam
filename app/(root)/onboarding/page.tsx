import AccountProfile from "@/components/forms/AccountProfile";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";
import Onboarding from "@/assets/images/Onboarding.png";
import Image from "next/image";
import PublicNavBar from "@/components/shared/PublicNavBar";
import PublicFooter from "@/components/shared/PublicFooter";

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
    <>
        <PublicNavBar />
    <main className=" px-24 flex flex-col justify-start bg-light-4 py-20">
      <section className="grid grid-cols-2 gap-20">
        <div className="mt-12">
          <h1 className="text-4xl font-medium text-primary-8">
            Welcome!
            <br />
            First things first...
          </h1>

          <p className="mt-4 text-base">
            Create a profile to personalize how you’ll appear to your contacts
          </p>
          <div className="mt-12 p-4">
            <Image src={Onboarding} alt="Onboarding" />
          </div>
        </div>
        <div className="mt-9  rounded-xl bg-primary-1 p-10 shadow-2xl">
          <AccountProfile user={userData} btnTitle="Continue" />
        </div>
      </section>
    </main>
    <PublicFooter />
    </>
  );
}

export default Page;
