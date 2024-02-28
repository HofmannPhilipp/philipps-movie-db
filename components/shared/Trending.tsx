import React from "react";
import Collection from "./Collection";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

function Trending() {
  return (
    <section className="wrapper">
      <Link href={"/trending"} className="flex items-center mb-2 group gap-2">
        <span className="bg-primary w-1 h-6 rounded-full" />
        <h1 className="text-xl font-bold ">Trending</h1>
        <ChevronRight className="group-hover:text-primary transition-colors" />
      </Link>
      <Collection path="/trending/movie/week" />
    </section>
  );
}

export default Trending;
