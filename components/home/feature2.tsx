import feature2 from "@/assets/images/feature 2.png";
import Image from "next/image";

const Feature2 = () => {
  return (
    <section className="z-1 mx-12 flex flex-col gap-8 md:mx-48">
      <h2 className="text-center font-secondary text-4xl font-semibold text-primary-10 md:text-left md:text-6xl md:leading-tight">
        From hello to chat, its just a{" "}
        <span className="text-primary-8">click away</span>
      </h2>
      <p className="text-justify font-primary text-base font-light md:text-xl">
        Lorem ipsum dolor sit amet consectetur. Suspendisse cursus cras
        fermentum dui. Amet mi hendrerit etiam ipsum. Odio nibh lorem amet neque
        nulla id. Aliquam dignissim dictumst nisl non tristique habitasse ipsum
        nibh varius.{" "}
      </p>
      <div className="mx-12 mt-4 grid h-auto w-auto place-content-center md:mx-0">
        <Image src={feature2} alt="featuring image" height={400} />
      </div>
    </section>
  );
};

export default Feature2;
