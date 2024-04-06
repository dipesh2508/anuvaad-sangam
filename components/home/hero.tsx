import hero from "@/assets/images/hero.png";
import hero_asset from "@/assets/hero_asset.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Hero = () => {
  return (
    <section className="flex flex-col  md:grid gap-8 md:gap-0 text-center md:h-[90vh] content-center w-screen md:grid-cols-12  bg-primary-5 py-12 md:py-0 px-8 md:px-24">
      <div className="radial absolute -left-48 -top-48 overflow-hidden rounded-full"></div>
      <div className="md:col-span-5 mx-16 md:mx-0 md:my-auto">
        {" "}
        <Image src={hero} alt="hero image" />
      </div>
      <div className="relative col-span-7 my-auto flex flex-col gap-8  text-light-1">
        <div className="font-secondary text-2xl md:text-7xl font-semibold text-center md:text-left">
          Where communication knows no boundaries
          </div>
        <Image
          src={hero_asset}
          alt="hero asset"
          className="absolute -right-10 -top-8"
        />
        <div className="font-primary text-base md:text-xl font-extralight text-light-3 text-center md:text-left">
        Welcome to Anuvaad Sangam, where every language finds its voice. Join us in breaking down barriers and fostering global connections through seamless cross-language communication.{" "}
        </div>
        <div className="text-center md:text-left">
          <Link href="/sign-up">
          <Button variant={"secondary"} className="">
            Register Now
          </Button>
          </Link>
        </div>
      </div>
      <div className="radial absolute -right-48 top-[80vh] h-96 w-96 overflow-hidden rounded-full"></div>
    </section>
  );
};

export default Hero;
