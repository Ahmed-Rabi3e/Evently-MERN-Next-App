import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/" className="">
          <Image
            src="/images/logo.svg"
            alt="logo"
            width={120}
            height={38}
            style={{
              width: 120,
              height: 38,
            }}
            priority
          />
        </Link>
        <p>{new Date().getFullYear()} Evently. All Rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
