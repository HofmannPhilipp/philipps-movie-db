"use client";

import { FetchMovies, Movie } from "@/types";
import { Loader } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import MovieCard from "./MovieCard";
import { validateAndFilterMovies } from "@/lib/utils";
import { useSearchParams } from "next/navigation";

type LoadMoreProps = {
  serverAction: (path: string) => Promise<FetchMovies | undefined>;
  path: string;
  searchQuery?: string;
  totalPages: number;
};

function LoadMore({
  serverAction,
  path,
  searchQuery,
  totalPages,
}: LoadMoreProps) {
  const [moreMovies, setMoreMovies] = useState<Movie[]>([]);
  const [ref, inView, entry] = useInView();
  const page = useRef(2);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (inView && page.current < totalPages) {
      fetchMore();
    }

    async function fetchMore() {
      let apiPath;
      if (searchQuery)
        apiPath = path + "?" + searchQuery + `&page=${page.current}`;
      else apiPath = path + `?page=${page.current}`;

      const data = await serverAction(apiPath);
      if (!data) {
        entry?.target.remove();
        return;
      }

      const movies = validateAndFilterMovies(data);
      if (movies.length === 0) {
        entry?.target.remove();
        return;
      }
      setMoreMovies([...moreMovies, ...movies]);
      page.current++;
    }
  }, [inView, totalPages, path, searchQuery, serverAction]);

  useEffect(() => {
    setMoreMovies([]);
    page.current = 2;
  }, [searchParams.toString()]);

  return (
    <>
      {moreMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          backdropPath={movie.backdrop_path!}
        />
      ))}
      <div
        ref={ref}
        className="flex absolute bottom-0 justify-center my-6 animate-pulse w-full"
      >
        <div>
          {inView && <Loader className="animate-spin text-primary" size={36} />}
        </div>
      </div>
    </>
  );
}

export default LoadMore;
