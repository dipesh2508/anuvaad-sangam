import feature3 from "@/assets/images/feature 3.png";
import Image from "next/image";

const Feature3 = () => {
  return (
    <section className="z-1 relative grid place-items-center bg-light-4 md:h-[90vh]">
      <div className="m-12 grid grid-flow-row gap-16 md:m-36 md:grid-flow-col md:grid-cols-5">
        <div className="grid place-content-center gap-8 md:col-span-3">
          <h2 className="text-center font-secondary text-4xl font-semibold text-primary-10 md:text-left md:text-6xl md:leading-tight">
            Any Where
            <br /> <span className="text-secondary-3">Any Device</span>
          </h2>
          <p className="text-justify font-primary text-base font-light md:text-left md:text-lg">
          Connect with anyone, anytime, anywhere with Anuvaad Sangam. Break free from language barriers and communicate effortlessly with individuals from across the globe. Whether it's day or night, our platform ensures seamless communication for all.{" "}
          </p>
        </div>
        <div className="md:col-span-2">
          <Image
            src={feature3}
            alt="featuring image"
            className="h-64 md:h-96"
          />
        </div>
      </div>
    </section>
  );
};

export default Feature3;
