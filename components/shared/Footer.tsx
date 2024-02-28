import { Instagram } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="h-24 flex-shrink-0 flex justify-center items-center border-t shadow-inner flex-col gap-4">
      <p className=" text-sm">© 2024 Philipp Hofmann</p>
      <div className="flex gap-2">
        <Link
          href={"https://www.instagram.com/philipps_19?igsh=MWZ1N292NTExaTN1"}
        >
          <Instagram size={24} />
        </Link>
        <Link href={"https://boxd.it/a065"}>
          <Image
            src={"/assets/icons/letterboxd.svg"}
            height={24}
            width={24}
            alt="letterboxd link"
          />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
