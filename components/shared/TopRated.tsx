import Link from "next/link";
import Collection from "./Collection";
import { ChevronRight } from "lucide-react";

function TopRated() {
  return (
    <section className="wrapper">
      <Link href={"/top_rated"} className="flex items-center mb-2 group gap-2">
        <span className="bg-primary w-1 h-6 rounded-full" />
        <h1 className="text-xl font-bold ">Top Rated</h1>
        <ChevronRight className="group-hover:text-primary transition-colors" />
      </Link>
      <Collection path="/movie/top_rated" />
    </section>
  );
}

export default TopRated;
