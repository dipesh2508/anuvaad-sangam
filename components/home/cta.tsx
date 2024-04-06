import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import cta from "@/assets/images/cta.png";

const CTA = () => {
  return (
    <section className="mt-8 grid grid-cols-1 items-center gap-0 bg-secondary-1 md:grid-cols-2 md:gap-8 pb-8 md:pb-0">
      <div className="shadow-custom m-0 mx-20 my-4 rounded-lg md:mx-0 md:my-12 md:ml-24 md:px-16 md:py-4">
        <Image src={cta} height={480} width={800} alt="logo" loading="lazy" />
      </div>
      <div className=" flex flex-col items-center gap-4 md:mr-36 md:items-start px-20 text-center md:text-left md:px-0">
        <h2 className="mb-4 font-primary text-4xl font-semibold text-primary-9 md:text-6xl">
          Express yourself in any language
        </h2>
        <p className="md:text-justify font-primary text-sm font-light text-secondary-4 md:text-base">
        Converse fluently in any language with Anuvaad Sangam. Break language barriers and engage in meaningful conversations with friends, colleagues, and global communities. From English to Mandarin, Spanish to Arabic, your conversations are seamlessly translated for universal understanding.
        </p>
        <Link href="/about">
          <Button className="mt-4" variant="cta">
            Try Now
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CTA;
