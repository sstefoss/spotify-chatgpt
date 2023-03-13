import { Configuration, OpenAIApi } from "openai";
import type { Recommendation } from "~/types";
import { getTopSongs } from "./spotify.server";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export const openai = new OpenAIApi(configuration);

const baseRecommendationPrompt = `You are to act as the perfect music suggester\n 
  I will provide you some previously liked songs on this format [song title, album name, artist] and every song will be in a new line.\n
  Then you will suggest me only a new song that you think i may like and it is not in the list but if i ask you again you will give me a different one \n
  Do not explain anything except for the song and the reason you selected it.\n
  The response should contain only a JSON object in the following format { "song": {song title}, "album": {album}, "artist": {artist}, reason: {reason} }\n
  without adding titles or prefixes.\n
  Be sure that what you suggest is a song and not an album or a playlist.\n
  The previously liked songs are the following: \n`;

export const getRecommendation = async (
  request: Request
): Promise<Recommendation> => {
  // fetch top songs
  const topSongs = await getTopSongs(request);
  // get chatgpt recommendation
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: [baseRecommendationPrompt, topSongs].join("\n"),
    max_tokens: 100,
    temperature: 0,
    n: 1,
  });

  const message = JSON.parse(
    completion.data.choices[0].text?.replace(/(\r\n|\n|\r)/gm, "") as string
  );

  return {
    song: {
      title: message.song,
      album: message.album,
      artist: message.artist,
    },
    reason: message.reason,
  };
};
