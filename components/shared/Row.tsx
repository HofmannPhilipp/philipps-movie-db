"use client";

import { Movie } from "@/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import MovieCard from "./MovieCard";
type RowProps = {
  movies: Movie[];
};

function Row({ movies }: RowProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: 2,
        duration: 40,
      }}
      className="group"
    >
      <CarouselPrevious className="left-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity disabled:hidden" />
      <CarouselContent className="">
        {movies.map((movie) => (
          <CarouselItem
            key={movie.id}
            className="basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <MovieCard
              id={movie.id}
              title={movie.title}
              backdropPath={movie.backdrop_path!}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="right-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity disabled:hidden" />
    </Carousel>
  );
}

export default Row;
