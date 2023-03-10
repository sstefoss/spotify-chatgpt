import { Form, useActionData } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";
import { openai } from "~/services/chatgpt.server";
import { spotifyApi } from "~/services/spotify.server";
import { getSession } from "~/services/session.server";

const basePrompt = `You are to act as the perfect music suggester\n 
  I will provide you some previously liked songs on this format [song title, album name, artist] and every song will be in a new line.\n
  Then you will suggest me only one new song that you think i may like and it is not in the list \n
  Do not explain anything except for the song and the reason you selected it.\n
  You will provide a link to search for the song on spotify. This is the format. https://open.spotify.com/search/artist:{ARTIST}%20track:{TRACK}\n
  The previously liked songs are the following: \n`;

export async function action({ request }: ActionArgs) {
  let session = await getSession(request.headers.get("cookie"));
  const accessToken = session.data["spotify:session"].accessToken;
  spotifyApi.setAccessToken(accessToken);

  const topTracks = await spotifyApi.getMyTopTracks();
  const songs = topTracks.body.items;
  const topSongs = songs
    .map(
      (s) =>
        `song title: ${s.name}, album name: ${s.album.name}, artist: ${s.artists[0].name}`
    )
    .join("\n");
  console.log(topSongs);

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: [basePrompt, topSongs].join("\n"),
    max_tokens: 100,
    temperature: 0,
    n: 1,
  });

  return { message: completion.data.choices[0].text };
}

export default function ChatGPT() {
  const data = useActionData<typeof action>();

  return (
    <>
      <Form method="post">
        <button type="submit" name="intent" value="get-me">
          Get Suggestion
        </button>
      </Form>
      {data?.message && <p>{data.message}</p>}
    </>
  );
}
