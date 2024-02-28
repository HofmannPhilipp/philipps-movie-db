"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ScrollArea } from "@/components/ui/scroll-area";

import { useRouter, useSearchParams } from "next/navigation";

function SortBy() {
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const selectedGenre = searchParams.get("with_genres") || "1";
  const selectedSortBy = searchParams.get("sort_by") || "vote_count.desc";
  const selectedVoteCountStart =
    Number(searchParams.get("vote_count.gte")) || 300;
  const selectedVoteCountEnd =
    Number(searchParams.get("vote_count.lte")) || 40_000;
  const href = `?sort_by=${selectedSortBy}&vote_count.gte=${selectedVoteCountStart}&vote_count.lte=${selectedVoteCountEnd}&with_genres=${selectedGenre}`;

  return (
    <Select
      defaultValue={selectedSortBy}
      onValueChange={(value: string) =>
        replace(href.replace(selectedSortBy, value))
      }
    >
      <SelectTrigger className="bg-secondary ">
        <div className="space-x-2">
          <span>Sort By</span>
          <SelectValue />
        </div>
      </SelectTrigger>
      <SelectContent className="">
        <ScrollArea className="h-36 md:h-fit">
          <SelectGroup>
            <SelectLabel>Popularity</SelectLabel>
            <SelectItem value="popularity.desc">
              Popularity Descending
            </SelectItem>
            <SelectItem value="popularity.asc">Popularity Ascending</SelectItem>
          </SelectGroup>
          <SelectSeparator className="bg-secondary-foreground" />
          <SelectGroup>
            <SelectLabel>Vote Average</SelectLabel>
            <SelectItem value="vote_average.desc">
              Vote Average Descending
            </SelectItem>
            <SelectItem value="vote_average.asc">
              Vote Average Ascending
            </SelectItem>
          </SelectGroup>
          <SelectSeparator className="bg-secondary-foreground" />

          <SelectGroup>
            <SelectLabel>Vote Count</SelectLabel>
            <SelectItem value="vote_count.desc">
              Vote Count Descending
            </SelectItem>
            <SelectItem value="vote_count.asc">Vote Count Ascending</SelectItem>
          </SelectGroup>
        </ScrollArea>
      </SelectContent>
    </Select>
  );
}

export default SortBy;
