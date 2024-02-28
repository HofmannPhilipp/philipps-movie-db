"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import Searchbar from "./Searchbar";

function MobileSearchbar() {
  const [openMobileSearch, setOpenMobileSearch] = useState(false);

  if (openMobileSearch)
    return (
      <div className="w-full z-30 bg-red-400">
        <Searchbar />
      </div>
    );

  return (
    <div className="">
      <Button
        variant={"ghost"}
        size={"icon"}
        onClick={() => setOpenMobileSearch(true)}
      >
        <SearchIcon />
      </Button>
    </div>
  );
}

export default MobileSearchbar;
