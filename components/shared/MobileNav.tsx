import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

import Image from "next/image";
import NavItems from "./NavItems";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";

function MobileNav() {
  return (
    <nav className="md:hidden">
      <Sheet>
        <Button asChild variant="ghost" size="icon">
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
        </Button>
        <SheetContent className="flex flex-col items-start gap-6 md:hidden dark:border-l-0">
          <Image
            src={"/assets/images/tmdbLogo.svg"}
            width={128}
            height={38}
            alt="logo"
          />
          <Separator className="border" />
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
}

export default MobileNav;
