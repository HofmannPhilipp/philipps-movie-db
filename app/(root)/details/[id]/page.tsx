import Trailer from "@/components/shared/Trailer";
import { fetchMovieDetails } from "@/lib/actions/action";
import { Star } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getPlaiceholder } from "plaiceholder";

type MovieDetailsProps = {
  params: { id: number };
};

async function MovieDetails({ params }: MovieDetailsProps) {
  const data = await fetchMovieDetails(params.id);
  if (!data) return notFound();
  const buffer = await fetch(
    `https://image.tmdb.org/t/p/w1280${data.backdrop_path}`
  ).then(async (res) => Buffer.from(await res.arrayBuffer()));

  const { base64 } = await getPlaiceholder(buffer);
  return (
    <section className="">
      <div className="max-h-[400px] relative w-full aspect-video">
        <Image
          src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`}
          fill
          placeholder="blur"
          blurDataURL={base64}
          className="object-cover"
          alt={data.title}
          priority
        />

        <Trailer id={data.id} />
      </div>
      <div className="wrapper">
        <h1 className="text-xl md:text-4xl">
          {data.title || data.original_title}
        </h1>
        <p>{new Date(data.release_date).getFullYear()}</p>

        <div className="flex gap-2 items-baseline my-6">
          <Star className="fill-yellow-400 text-yellow-400" size={14} />
          <p>{Math.round(data.vote_average * 10) / 10}</p>
          <p className="text-xs opacity-80">({data.vote_count})</p>
        </div>
        <div className="space-y-4">
          <h2 className="md:text-2xl text-primary">Movie Info</h2>
          <p className="text-xs md:text-base">{data.overview}</p>
          <div>
            <p className="text-xs md:text-base">
              Runtime <span className="pl-8">{data.runtime} minutes</span>
            </p>
            <p className="text-xs md:text-base">
              Directed By{" "}
              <span className="pl-3 text-primary underline">
                {data.credits.crew.map(
                  (crew) => crew.job === "Director" && crew.name
                )}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;
