"use client";

import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";
import { Separator } from "../ui/separator";

function Searchbar() {
  const [openSearch, setOpenSearch] = useState(false);
  return (
    <div className="flex  rounded-full border border-input">
      <input className="flex-1 mx-4 outline-none" />
      <Separator orientation="vertical" />
      <Button
        variant={"ghost"}
        size={"icon"}
        className="rounded-l-none rounded-r-full w-16"
        onClick={() => setOpenSearch(!openSearch)}
      >
        <SearchIcon />
      </Button>
    </div>
  );
}

export default Searchbar;
