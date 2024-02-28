import { ChevronRight } from "lucide-react";
import Collection from "./Collection";
import Link from "next/link";

function Discover() {
  return (
    <section className="wrapper">
      <Link href={"/discover"} className="flex items-center mb-2 group gap-2">
        <span className="bg-primary w-1 h-6 rounded-full" />
        <h1 className="text-xl font-bold ">Discover</h1>
        <ChevronRight className="group-hover:text-primary transition-colors" />
      </Link>
      <Collection path="/discover/movie" key={"Popular"} />
    </section>
  );
}

export default Discover;
