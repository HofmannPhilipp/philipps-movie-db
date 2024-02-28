import { validateAndFilterMovies } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import MovieCard from "./MovieCard";
import { fetchMovies } from "@/lib/actions/action";
type CollectionProps = {
  path: string;
};

async function Collection({ path }: CollectionProps) {
  const data = await fetchMovies(path);
  if (!data) return;
  const movies = validateAndFilterMovies(data);
  return (
    <Carousel
      opts={{
        align: "start",
        slidesToScroll: 1,
        duration: 40,
      }}
      className="group/collection"
    >
      <CarouselPrevious className="left-0 z-10 md:opacity-0 group-hover/collection:opacity-100 transition-opacity disabled:hidden" />
      <CarouselContent className="">
        {movies?.map((movie) => (
          <CarouselItem
            key={movie.id}
            className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <MovieCard
              id={movie.id}
              title={movie.title}
              backdropPath={movie.backdrop_path!}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="right-0 z-10 md:opacity-0 group-hover/collection:opacity-100 transition-opacity disabled:hidden" />
    </Carousel>
  );
}

export default Collection;
