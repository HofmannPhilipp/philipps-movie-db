"use client";

import { genresList } from "@/constants/genreList";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

function GenreFilter() {
  const searchParams = useSearchParams();
  const selectedGenre = searchParams.get("with_genres") || "1";
  const selectedSortBy = searchParams.get("sort_by") || "vote_count.desc";
  const selectedVoteCountStart =
    Number(searchParams.get("vote_count.gte")) || 300;

  const selectedVoteCountEnd =
    Number(searchParams.get("vote_count.lte")) || 40_000;

  const href = `?sort_by=${selectedSortBy}&vote_count.gte=${selectedVoteCountStart}&vote_count.lte=${selectedVoteCountEnd}&with_genres=${selectedGenre}`;

  return (
    <div className="flex overflow-x-auto sm:flex-wrap  gap-4 scrollbar-hide">
      {genresList.map((genre) => (
        <Button
          variant={"secondary"}
          key={genre.id}
          className={selectedGenre === genre.id ? "text-primary" : ""}
          asChild
        >
          <Link replace href={href.replace(selectedGenre, genre.id)}>
            {genre.name}
          </Link>
        </Button>
      ))}
    </div>
  );
}

export default GenreFilter;
