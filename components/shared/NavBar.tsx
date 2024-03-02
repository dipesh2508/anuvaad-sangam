import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import logo from "@/assets/logo/AS new logo.svg";

const NavBar = () => {
  return (
    <nav className="flex h-16 content-center justify-between border-b-2 border-primary-3 bg-light-2 px-12">
      <div className="grid content-center">
        <Image src={logo} alt="logo" height={50} />
      </div>
      <div className="grid content-center">
        <SignedIn>
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: "h-10 w-10",
              },
              variables: {
                colorPrimary: "#4130D9",
              },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  );
};

export default NavBar;
