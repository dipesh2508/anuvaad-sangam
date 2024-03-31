import Chat from "@/components/shared/Chat";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";
import SearchBar from "@/components/home/searchBar";

const Page = async () => {

  const user = await currentUser();
  if(!user){
    redirect("/sign-in");
  }

  const userData = await fetchUser(user.id);

  if (!userData) {
    redirect("/onboarding");
  }

  return (
    <div className="grid h-[90vh] w-full grid-cols-12">
      <div className="col-span-9">
        <Chat />
      </div>
      <div className="col-span-3 h-[90vh] overflow-scroll overflow-x-hidden flex flex-col items-center border-l border-l-primary-3 pb-8">
        <SearchBar image={userData.image} id={userData._id} />
    </div>
  </div>

  )
}

export default Page