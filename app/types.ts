export type Song = {
  id: number;
  title: string;
  artist: string;
  album: string;
};

export type Recommendation = {
  id: number;
  song: Song;
  reason: string;
  liked: boolean;
  disliked: boolean;
};
