import { useFetcher } from "@remix-run/react";
import { ThumbsUp, ThumbsDown, Search } from "react-feather";
import cn from "classnames";

import type { Recommendation } from "~/types";

type RecommendationProps = {
  data: Recommendation;
  className?: string;
};

export const SongRecommendation = ({
  data,
  className,
}: RecommendationProps) => {
  const { song, reason, id, liked, disliked } = data;
  const fetcher = useFetcher();
  return (
    <div className={cn("bg-gray-700 rounded-lg h-fit p-8 w-full", className)}>
      <div className="flex justify-between">
        <div>
          <h2 className="mb-1.5">{song.title}</h2>
          <h3 className="mb-8 text-white/60">{song.artist}</h3>
        </div>
        <div className="flex">
          <fetcher.Form method="post" action="/action/like">
            <input type="hidden" name="id" value={id} />
            <button>
              <ThumbsUp
                size={32}
                className={cn(
                  "mr-10 cursor-pointer text-green-500/40 hover:text-green-500/100",
                  {
                    "!text-green-500/100": liked,
                  }
                )}
              />
            </button>
          </fetcher.Form>
          <fetcher.Form method="post" action="/action/dislike">
            <input type="hidden" name="id" value={id} />
            <button>
              <ThumbsDown
                size={32}
                className={cn(
                  "cursor-pointer text-red-500/40 hover:text-red-500/100",
                  {
                    "!text-red-500/100": disliked,
                  }
                )}
              />
            </button>
          </fetcher.Form>
        </div>
      </div>
      <p className="mb-5">{reason}</p>
      <div
        className="flex items-center cursor-pointer text-white/60 hover:text-white/100"
        onClick={() => {
          window.location.href = `https://open.spotify.com/search/artist:${song.artist}%20track:${song.title}`;
        }}
      >
        <Search size={16} />
        <span className="ml-1.5">Find on Spotify</span>
      </div>
    </div>
  );
};
