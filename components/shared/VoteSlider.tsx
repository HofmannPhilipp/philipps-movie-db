"use client";

import React, { useState } from "react";
import { Slider } from "../ui/slider";
import { useRouter, useSearchParams } from "next/navigation";

function VoteSlider() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedGenre = searchParams.get("with_genres") || "1";
  const selectedSortBy = searchParams.get("sort_by") || "vote_count.desc";
  const selectedVoteCountStart =
    Number(searchParams.get("vote_count.gte")) || 300;
  const selectedVoteCountEnd =
    Number(searchParams.get("vote_count.lte")) || 40_000;

  const [voteCountRange, setVoteCountRange] = useState([
    selectedVoteCountStart,
    selectedVoteCountEnd,
  ]);
  const href = `?sort_by=${selectedSortBy}&vote_count.gte=${selectedVoteCountStart}&with_genres=${selectedGenre}&vote_count.lte=${selectedVoteCountEnd}`;

  return (
    <div className="bg-secondary rounded-md p-2 w-full">
      <p className="py-2">Select Vote Count</p>
      <Slider
        defaultValue={[selectedVoteCountStart, selectedVoteCountEnd]}
        min={300}
        max={40_000}
        step={100}
        minStepsBetweenThumbs={1}
        onValueChange={(value) => setVoteCountRange([value[0], value[1]])}
        onValueCommit={() =>
          router.replace(
            href
              .replace(
                selectedVoteCountStart.toString(),
                voteCountRange[0].toString()
              )
              .replace(
                selectedVoteCountEnd.toString(),
                voteCountRange[1].toString()
              )
          )
        }
      />
      <div className="flex justify-center gap-2 p-2">
        <span>{voteCountRange[0]}</span>
        <span>-</span>
        <span>{voteCountRange[1]}</span>
      </div>
    </div>
  );
}

export default VoteSlider;
