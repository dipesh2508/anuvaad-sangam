import hero from "@/assets/images/aboutHero.png";
import hero_asset from "@/assets/hero_asset.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="flex w-screen  flex-col content-center gap-8 bg-primary-5 px-8 py-12 text-center md:grid  md:h-[90vh] md:grid-cols-12 md:gap-0 md:px-24 md:py-0">
      <div className="radial absolute -left-48 -top-48 overflow-hidden rounded-full"></div>
      <div className="mx-16 md:col-span-5 md:mx-12 md:my-auto">
        {" "}
        <Image src={hero} alt="hero image" />
      </div>
      <div className="relative col-span-7 my-auto flex flex-col gap-8  text-light-1">
        <div className="text-center font-secondary text-2xl font-semibold md:text-left md:text-7xl">
          Where the world speaks your language
        </div>
        <Image
          src={hero_asset}
          alt="hero asset"
          className="absolute -top-12 right-36"
        />
        <div className="text-center font-primary text-base font-extralight text-light-3 md:text-left md:text-xl">
          Imagine a world where language is never a hurdle. With Anuvaad Sangam,
          it is. Chat with anyone, anywhere, and have real-time conversations
          seamlessly translated into your preferred language. No more
          frustration, just effortless connection and the joy of understanding
          each other.
        </div>
      </div>
      <div className="radial absolute -right-48 top-[80vh] h-96 w-96 overflow-hidden rounded-full"></div>
    </section>
  );
};

export default Hero;
