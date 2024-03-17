import Contact from "@/assets/images/Contact.png";
import HelpForm from "@/components/forms/HelpForm";
import PublicFooter from "@/components/shared/PublicFooter";
import PublicNavBar from "@/components/shared/PublicNavBar";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { SiInstagram } from "react-icons/si";

const Page = () => {
  return (
    <section>
    <PublicNavBar />
    <div className="flex w-max mx-8 py-9">

      <div className="  py-8 pl-16 pr-36 ">
        <h1 className="font-primary text-6xl font-medium">Contact Us</h1>
        <div className="mt-12 flex flex-col gap-3 px-2">
          <p>
            Feel free to connect with us anytime. We will get back to you as
            soon as we can.
          </p>
        </div>
        <div className="mt-8 px-2">
          <HelpForm />
        </div>
      </div>
      <div className="  py-8">
        <div className="w-[520px]">
          <Image src={Contact} alt="contact" />
        </div>
        <div className="ml-20 mt-12 flex w-96 flex-col gap-4">
          <div className="flex flex-row items-center gap-4">
            <div className="pr-1">
              <FaLocationDot size={20} />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div>
              <MdCall size={24} />
            </div>
            <p>+91 485 543 458</p>
          </div>
          <div className="flex flex-row items-center gap-4">
            <div>
              <MdOutlineEmail size={24} />
            </div>
            <p>info@gmail.com</p>
          </div>
        </div>

      </div>
    </div>
    <PublicFooter />
    </section>
  );
};

export default Page;
