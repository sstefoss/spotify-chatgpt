export type Song = {
  title: string;
  artist: string;
  album: string;
};

export type Recommendation = {
  song: Song;
  reason: string;
};
