"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { genresList } from "@/constants/genreList";
import { Clapperboard, FilterIcon, ListFilter } from "lucide-react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  const selectedGenreId = searchParams.get("with_genres") || "1";
  const selectedSortBy = searchParams.get("sort_by") || "vote_count.desc";
  const selectedVoteCount = Number(searchParams.get("vote_count.gte")) || 300;

  const href = `?sort_by=${selectedSortBy}&vote_count.gte=${selectedVoteCount}&with_genres=${selectedGenreId}`;
  return (
    <>
      <Menubar className="bg-secondary rounded-full border-none">
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">
            <Clapperboard size={16} />
          </MenubarTrigger>
          <MenubarContent>
            {genresList.map((genre) => (
              <MenubarItem key={genre.id}>
                <Link
                  replace
                  href={href.replace(selectedGenreId, genre.id)}
                  className={`cursor-pointer w-full ${
                    selectedGenreId === genre.id && "text-primary"
                  }`}
                >
                  {genre.name}
                </Link>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>{" "}
        <Separator
          orientation="vertical"
          decorative
          className="bg-black dark:bg-white"
        />
        <MenubarMenu>
          <MenubarTrigger className="cursor-pointer">
            <ListFilter size={16} />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Link
                replace
                href={href.replace(selectedSortBy, "vote_count.desc")}
                className={`cursor-pointer w-full ${
                  selectedSortBy === "vote_count.desc" && "text-primary"
                }`}
              >
                Most Votes
              </Link>
            </MenubarItem>
            <MenubarItem>
              <Link
                replace
                href={href.replace(selectedSortBy, "vote_average.desc")}
                className={`cursor-pointer ${
                  selectedSortBy === "vote_average.desc" && "text-primary"
                }`}
              >
                Best Score
              </Link>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </>
  );
}

export default Filter;
