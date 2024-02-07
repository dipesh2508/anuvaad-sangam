"use client";

import logo from "@/assets/logo/AS new logo white.svg";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { navLinks } from "@/constants";

const PublicNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="z-50 h-24 w-full border-gray-200 bg-primary-5 text-light-3">
      <div className="mx-auto flex max-h-96 max-w-screen-xl flex-wrap items-center justify-between px-2 pt-2 md:px-0">
        <Link href="/" className="flex items-center">
          <Image
            src={logo}
            height={75}
            className="m-0"
            alt="Health Optima"
            loading="lazy"
          />
        </Link>

        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={() => setIsOpen(!isOpen)} //  Event handler for a click event that toggles the value of isOpen.
          className="
            text-primary 
            inline-flex 
            h-10 
            w-10 
            items-center 
            justify-center 
            rounded-lg 
            p-2 
            text-sm 
            text-primary-1 
            ring-2 
            ring-primary-1 
            hover:bg-primary-8 
            hover:outline-none 
            hover:ring-primary-3 
            focus:bg-primary-8 
            focus:outline-none 
            focus:ring-2 
            focus:ring-primary-3 
            md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-5 w-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="mt-4 flex flex-col p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:p-0 ">
            {navLinks.map((nav) => (
              <li key={nav.id}>
                <Link
                  href={`/${nav.id === "contact" ? "#contact" : `${nav.id}`}`}
                  className="duration-250 
                    relative 
                    block 
                    cursor-pointer
                    px-4
                    py-2
                    transition-all
                    before:absolute
                    before:-bottom-0.5
                    before:left-1/2
                    before:h-1
                    before:w-0
                    before:-translate-x-1/2
                    before:rounded-full
                    before:bg-gradient-to-r
                    before:from-secondary-3
                    before:via-secondary-2
                    before:to-secondary-3
                    before:opacity-0
                    before:transition-all
                    before:duration-500
                    before:content-['']
                    hover:text-primary-1
                    hover:before:w-3/4
                    hover:before:opacity-100"
                >
                  {nav.title}
                </Link>
              </li>
            ))}

            <Link href="/sign-in">
              <Button variant={"secondary"} className="px-8">
                Login
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button variant={"outline"} className="px-8">
                Register
              </Button>
            </Link>
          </ul>
        </div>
      </div>
      {isOpen && (
        <div className="absolute z-50 mt-3 flex w-full flex-col gap-3 bg-primary-9 px-3 py-4 text-center text-base font-semibold opacity-90 md:hidden">
          {navLinks.map((data) => (
            <Link
              href={`/${data.id === "contact" ? "#contact" : `${data.id}`}`}
              onClick={() => setIsOpen(false)}
              key={data.id}
              className="block py-2 pl-3 pr-4 hover:rounded hover:bg-primary-3 hover:text-primary-8"
            >
              {data.title}
            </Link>
          ))}
          <Link href="/sign-in">
            <Button variant={"secondary"} className="px-8 opacity-100">
              Login
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button variant={"outline"} className="px-8 opacity-100">
              Register
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default PublicNavBar;
