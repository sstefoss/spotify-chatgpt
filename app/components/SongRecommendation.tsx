import { Form } from "@remix-run/react";
import { ThumbsUp, ThumbsDown, Search } from "react-feather";

import type { Recommendation } from "~/types";

type RecommendationProps = {
  data: Recommendation;
};

export const SongRecommendation = ({ data }: RecommendationProps) => {
  const { song, reason, id } = data;
  return (
    <div className="bg-gray-700 rounded-lg max-w-[720px] h-fit p-8">
      <div className="flex justify-between">
        <div>
          <h2 className="mb-1.5">{song.title}</h2>
          <h3 className="mb-8 text-white/60">{song.artist}</h3>
        </div>
        <div className="flex">
          <Form method="post">
            <input type="hidden" name="id" value={id} />
            <button name="action" value="like">
              <ThumbsUp
                size={32}
                className="mr-10 cursor-pointer text-green-500/60 hover:text-green-500/100"
              />
            </button>
            <button name="action" value="dislike">
              <ThumbsDown
                size={32}
                className="cursor-pointer text-red-500/60 hover:text-red-500/100"
              />
            </button>
          </Form>
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
