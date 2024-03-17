"use client";

import { sideBarLinks } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FaGear } from "react-icons/fa6";

const LeftSideBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const setting = pathname === "/settings";

  return (
    <section className="border-r-primary-3 flex h-screen w-max flex-col justify-between overflow-auto border-r pb-5 pt-28 max-md:hidden">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {sideBarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          let Icon = link.icon;
          return (
            <Link key={link.id} href={link.route}>
              <div
                className={`flex items-center gap-4 rounded-md p-2 ${
                  isActive ? "bg-primary-1 text-primary-6" : "text-primary-8"
                }`}
              >
                <Icon size={24} />
              </div>
            </Link>
          );
        })}
        <hr />
        <Link href="/profile">
          <div
            className={`flex items-center gap-4 rounded-md p-2 ${
              setting ? "bg-primary-1 text-primary-6" : "text-primary-8"
            }`}
          >
            <FaGear size={24} />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default LeftSideBar;
