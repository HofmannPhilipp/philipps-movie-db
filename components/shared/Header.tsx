"use client";

import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowLeft, CircleUserRound, SearchIcon } from "lucide-react";
import { Button } from "../ui/button";

import tmdbLogo from "@/public/assets/images/tmdbLogo.svg";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

function Header() {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  return (
    <header className="w-full">
      <div className="wrapper flex gap-10 justify-between items-center lg:gap-20">
        <Link
          href="/"
          className={`flex-shrink-0 ${showFullWidthSearch && `hidden`}`}
        >
          <Image
            src={tmdbLogo}
            alt="logo"
            className="h-9 w-auto md:h-12 lg:h-16"
            priority
          />
        </Link>
        {showFullWidthSearch && (
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => setShowFullWidthSearch(false)}
          >
            <ArrowLeft />
          </Button>
        )}
        <form
          className={` flex-grow max-w-lg ${
            showFullWidthSearch ? `flex ` : `sm:flex hidden`
          }`}
          onSubmit={(e) => {
            e.preventDefault();
            if (!searchRef.current || searchRef.current?.value == "") return;
            router.push(`/search/${searchRef.current.value}`);
            searchRef.current.value = "";
          }}
        >
          <input
            ref={searchRef}
            type="search"
            placeholder="Search"
            className="flex-1 outline-none shadow-inner shadow-secondary border border-secondary rounded-l-full py-1 px-4 w-full text-lg focus:border-blue-500"
          />
          <Button
            type="submit"
            variant={"secondary"}
            size={"icon"}
            className="flex-shrink-0 rounded-r-full border border-secondary border-l-0"
          >
            <SearchIcon />
          </Button>
        </form>

        <div
          className={` md:gap-4 items-center flex-shrink-0 ${
            showFullWidthSearch ? `hidden` : `flex`
          }`}
        >
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => setShowFullWidthSearch(true)}
            className="sm:hidden"
          >
            <SearchIcon />
          </Button>
          <ThemeToggle />
          <Button variant="ghost" size="icon">
            <CircleUserRound />
          </Button>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
