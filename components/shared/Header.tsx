import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo.svg";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src={Logo}
            width={128}
            height={38}
            style={{
              width: 128,
              height: 38,
            }}
            alt="Evently logo"
            priority
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedOut>
            <button className="bg-primary px-4 p-2 text-white rounded">
              <SignInButton />
            </button>
          </SignedOut>
          <SignedIn>
            <UserButton />
            <MobileNav />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};

export default Header;
