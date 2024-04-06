import feature1 from "@/assets/images/Feature1.png";
import Image from "next/image";

const Feature1 = () => {
  return (
    <section className="z-1 relative grid place-items-center bg-light-4 md:h-[90vh]">
      <div className="m-12 grid grid-flow-row gap-8 md:m-36 md:grid-flow-col md:grid-cols-5">
        <div className="grid place-content-center gap-8 md:col-span-3">
          <h2 className="text-center font-secondary text-4xl font-semibold text-primary-10 md:text-left md:text-6xl md:leading-tight">
            Your Space,
            <br /> <span className="text-secondary-3">Your Rules</span>
          </h2>
          <p className="text-justify font-primary text-base font-light md:text-left md:text-lg">
          Personalize your presence on Anuvaad Sangam with customizable profiles. Showcase your identity, interests, and preferences to connect with like-minded individuals effortlessly. Tailor your profile to reflect the true essence of who you are in our vibrant community.{" "}
          </p>
        </div>
        <div className="md:col-span-2">
          <Image
            src={feature1}
            alt="featuring image"
            className="h-64 md:h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Feature1;
