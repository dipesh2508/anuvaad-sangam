import LanguageSelectorForm from "@/components/forms/LanguageSelectorForm";
import Image from "next/image";
import flag from "@/assets/flags/India.svg";
import Language from '@/assets/images/Language.png'

const Page = () => {
  return (
    <section className="flex flex-row px-12 py-16 gap-48">
      <div className=" col-span-1">
        <h2 className="font-primary text-4xl font-semibold">Select Language</h2>
        <div className="mt-16">
          Your Current Language is:
          <div className="mt-2 flex flex-row  items-center gap-4">
            <Image src={flag} alt="flag" width={50} height={50} />
            <span>Hindi</span>
          </div>
        </div>
        <div className="mt-16">
          <LanguageSelectorForm />
        </div>
      </div>
      <div className="w-[700px] pt-12">
        <Image src={Language} alt="language" />
      </div>
    </section>
  );
};

export default Page;
