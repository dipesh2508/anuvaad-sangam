import { Button } from "@/components/ui/button";
import { fetchUser } from "@/lib/actions/user.actions";
import { Edit3 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { languages } from "@/lib/constants/language";

interface IParams{
    id: string;
}

const page = async ({ params }: { params: IParams }) => {
    const userData = await fetchUser(params.id);


    if (!userData) {
        redirect("/onboarding");
      }

      const language:any = languages.find((lang) => lang.value === userData.language);

  return (
    <section className="flex flex-col px-12 w-[85%] py-16 gap-8">
        <div className="flex flex-row h-fit justify-between items-center px-8 w-full p-4 bg-light-4 rounded-3xl border border-primary-1">
            <div className="flex flex-row items-center gap-8">

            <Image src={userData.image} width={96} height={96} className="rounded-full ring-primary-3 border-1" alt={userData.name} />
            <div>

            <h2 className="font-semibold text-3xl font-primary">{userData.name}</h2>
            <h4 className=" text-lg font-primary">@{userData.username}</h4>
            </div>
            </div>
            <Link href="/profile/edit">
            <Button className="flex flex-row gap-2">Edit <Edit3/></Button>
            </Link>
        </div>
        <div className="flex flex-col h-fit justify-between px-8 w-full gap-4">
            <h2 className="font-semibold text-xl">User Details</h2>
            <div className="flex flex-row items-center gap-3">
                <h3 className="font-medium text-lg">Bio</h3>
                <p>{userData.bio}</p>
                </div>
            <div className="flex flex-row items-center gap-3">
                <h3 className="font-medium text-lg">Email</h3>
                <p>{userData.email}</p>
            </div>
            <div className="flex flex-row items-center gap-3">
                <h3 className="font-medium text-lg">Language Preference</h3>
                <p>{language.key}</p>
                </div>
                <div className="flex flex-row items-center gap-3">
                <h3 className="font-medium text-lg">Joined on</h3>
                <p>{userData.createdAt.toLocaleDateString()}</p>
                </div>
        </div>
    </section>
  )
}

export default page