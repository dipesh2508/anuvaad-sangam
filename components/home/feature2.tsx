import feature2 from "@/assets/images/feature 2.png";
import Image from "next/image";

const Feature2 = () => {
  return (
    <section className="z-1 mx-12 flex flex-col gap-8 md:mx-48">
      <h2 className="text-center font-secondary text-4xl font-semibold text-primary-10 md:text-center md:text-6xl md:leading-tight">
        From hello to chat, its just a{" "}
        <span className="text-primary-8">click away</span>
      </h2>
      <p className="text-center font-primary text-base font-light md:text-xl md:px-6">
      Chat effortlessly across languages with Anuvaad Sangam. Connect with friends, colleagues, and new acquaintances in real-time conversations. Experience seamless communication, no matter what language you speak.{" "}
      </p>
      <div className="mx-12 mt-4 grid h-auto w-auto place-content-center md:mx-0">
        <Image src={feature2} alt="featuring image" height={400} />
      </div>
    </section>
  );
};

export default Feature2;
