import hero from "@/assets/images/hero.png";
import hero_asset from "@/assets/hero_asset.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="grid h-[90vh] w-screen grid-cols-12 content-center bg-primary-5 px-24">
      <div className="radial absolute -left-48 -top-48 h-96 w-96 overflow-hidden rounded-full"></div>
      <div className="col-span-5 my-auto grid content-center">
        {" "}
        <Image src={hero} alt="hero image" />
      </div>
      <div className="relative col-span-7 my-auto flex flex-col gap-8 font-secondary text-7xl font-semibold text-light-1">
        Where communication knows no boundaries
        <Image
          src={hero_asset}
          alt="hero asset"
          className="absolute -right-10 -top-8"
        />
        <div className="font-primary text-xl font-extralight text-light-3">
          Lorem ipsum dolor sit amet consectetur. Suspendisse cursus cras
          fermentum dui. Amet mi hendrerit etiam ipsum.{" "}
        </div>
        <div className="flex ">
          <Button variant={"secondary"} className="my-auto px-6">
            Register Now
          </Button>
        </div>
      </div>
      <div className="radial absolute -bottom-48 -right-48 h-96 w-96 overflow-hidden rounded-full"></div>
    </section>
  );
};

export default Hero;
