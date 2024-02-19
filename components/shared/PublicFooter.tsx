"use client";

import logo from "@/assets/logo/AS new logo.svg";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

import { navLinks } from "@/constants";

const PublicFooter = () => {
    return(
        <footer className = "h-72 w-full bg-primary-8 text-white p-14">
            <div className="flex gap-x-72">
                <div className="bg-white rounded-md p-4">
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

                        <ul className="text-base font-light font-secondary">
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
                        <ul className="text-base font-light font-secondary hover:text-color">
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

            <div className="flex justify-between mt-6">
                <div className="flex items-center">
                    <p className="text-xs font-secondary font-light">
                        © 2024 Anuvaad Sangam. All rights reserved
                    </p>
                </div>

                <div className="flex gap-x-4">
                    <Link href="/">
                        <span className="h-10 w-10 bg-primary-7 inline-flex justify-center items-center rounded-full hover:bg-black">
                            <FaXTwitter/>
                        </span>
                    </Link>
                    <Link href="/">
                        <span className="h-10 w-10 bg-primary-7 inline-flex justify-center items-center rounded-full hover:bg-facebook">
                            <FaFacebook />
                        </span>
                    </Link>
                    <Link href="/">
                        <span className="h-10 w-10 bg-primary-7 inline-flex justify-center items-center rounded-full hover:bg-gradient-to-b from-insta1  via-insta3 to-insta5">
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