import Discover from "@/components/shared/Discover";
import TopRated from "@/components/shared/TopRated";
import Trending from "@/components/shared/Trending";

export default async function Home() {
  return (
    <>
      <Trending />
      <TopRated />
      <Discover />
    </>
  );
}
