import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { fetchMovieTrailers } from "@/lib/actions/action";

import { Play } from "lucide-react";

type TrailerProps = {
  id: number;
};

async function Trailer({ id }: TrailerProps) {
  const data = await fetchMovieTrailers(id);

  const filterdTrailers = data?.filter(
    (video) =>
      video.official === true &&
      video.type === "Trailer" &&
      video.site == "YouTube"
  );
  if (!data || !filterdTrailers || filterdTrailers?.length === 0) return;
  return (
    <div className="">
      <Dialog>
        <div className="w-full wrapper absolute bottom-0 flex justify-end">
          <DialogTrigger className="bg-primary p-2 rounded-full hover:opacity-90 transition-opacity">
            <Play className="fill-white text-white pl-1" size={40} />
          </DialogTrigger>
        </div>
        <DialogContent className=" md:max-w-3xl aspect-video">
          <iframe
            className="w-full h-full"
            allowFullScreen
            src={`https://www.youtube.com/embed/${filterdTrailers[0].key}`}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Trailer;
