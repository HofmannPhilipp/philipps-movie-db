import GenreFilter from "@/components/shared/GenreFilter";
import LoadMore from "@/components/shared/LoadMore";
import MovieCard from "@/components/shared/MovieCard";
import SortBy from "@/components/shared/SortBy";
import VoteSlider from "@/components/shared/VoteSlider";
import { fetchMovies } from "@/lib/actions/action";
import { validateAndFilterMovies } from "@/lib/utils";
import { notFound } from "next/navigation";
import React from "react";

type DiscoverPageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

async function DiscoverPage({ searchParams }: DiscoverPageProps) {
  const genreParam = Number(searchParams.with_genres) || 1;
  const sortByParam = searchParams.sort_by || "vote_count.desc";
  const voteCountStartParam = Number(searchParams["vote_count.gte"]) || 300;
  const voteCountEndParam = Number(searchParams["vote_count.lte"]) || 40_000;
  const query = `sort_by=${sortByParam}&vote_count.gte=${voteCountStartParam}&vote_count.lte=${voteCountEndParam}&with_genres${
    genreParam !== 1 ? `=${genreParam}` : ""
  }`;
  const data = await fetchMovies("/discover/movie?" + query);
  if (!data) return notFound();
  const movies = validateAndFilterMovies(data);
  return (
    <section className="wrapper flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Discover</h1>
      </div>
      <GenreFilter />
      <div className="flex gap-4 flex-col md:flex-row">
        <SortBy />
        <VoteSlider />
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 relative pb-36">
        {movies?.map((movie) => (
          <MovieCard
            id={movie.id}
            title={movie.title || movie.original_title}
            backdropPath={movie.backdrop_path!}
            key={movie.id}
          />
        ))}
        <LoadMore
          serverAction={fetchMovies}
          path={"/discover/movie"}
          searchQuery={query}
          totalPages={data.total_pages}
        />
      </div>
    </section>
  );
}

export default DiscoverPage;
