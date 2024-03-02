import logo from "@/assets/logo/AS new logo.svg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

const PublicFooter = () => {
  return (
    <footer className="h-72 w-full bg-primary-8 p-14 text-white">
      <div className="flex gap-x-72">
        <div className="rounded-md bg-white p-4">
          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              height={75}
              className="m-0"
              alt="Anuvaad Sangam Logo"
              loading="lazy"
            />
          </Link>
        </div>

        <div className="flex gap-x-52">
          <div className="flex items-center">
            <ul className="font-secondary text-base font-light">
              <li className="mb-4">
                <Link href="/">About Us</Link>
              </li>
              <li className="mb-4">
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">Features</Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <ul className="hover:text-color font-secondary text-base font-light">
              <li className="mb-4">
                <Link href="/">Terms of Service</Link>
              </li>
              <li className="mb-4">
                <Link href="/">Terms and Conditions</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between">
        <div className="flex items-center">
          <p className="font-secondary text-xs font-light">
            © 2024 Anuvaad Sangam. All rights reserved
          </p>
        </div>

        <div className="flex gap-x-4">
          <Link href="/">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-7 hover:bg-black">
              <FaXTwitter />
            </span>
          </Link>
          <Link href="/">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-7 hover:bg-facebook">
              <FaFacebook />
            </span>
          </Link>
          <Link href="/">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-7 from-insta1 via-insta3  to-insta5 hover:bg-gradient-to-b">
              {/* <AiOutlineInstagram /> */}
              <SiInstagram />
            </span>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default PublicFooter;
