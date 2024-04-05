import Chat from "@/components/shared/Chat";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";
import { languages } from "@/lib/constants/language";
import LanguagesCard from "@/components/cards/LanguagesCard";

const Page = async () => {

  const user = await currentUser();
  if (!user) {
    redirect("/sign-in");
  }
  

  const userData = await fetchUser(user.id);

  if (!userData) {
    redirect("/onboarding");
  }

  if(!languages){
    return null;
  }


  return (
    <div className="grid h-[90vh] w-full grid-cols-12">
      <div className="col-span-9">
        <Chat />
      </div>
      <div className="col-span-3 flex h-[90vh] flex-col items-center overflow-scroll overflow-x-hidden border-l border-l-primary-3 pb-8">
        <div className="mt-6 flex h-36 w-36 flex-col content-center justify-center gap-4">
          <Image
            src={userData.image}
            alt="avatar"
            height={120}
            width={120}
            className="mx-auto rounded-full"
          />
          <h2 className="text-center text-xl font-medium">{userData.name}</h2>
        </div>
        <div className=" mt-4 h-[1px] w-10/12 bg-primary-3"></div>
        <div className="mt-4 w-full px-7">
          <h3 className=" font-primary text-lg font-medium">
            Select your Language
          </h3>
          <div className="mb-12 mt-2 flex flex-col gap-2">
            {languages.map((language, index) => (
              <div key={index} className="flex gap-4">
                <LanguagesCard languages={language} userLang={userData.language} id={userData.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
