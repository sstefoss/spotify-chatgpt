// app/routes/index.tsx
import { type LoaderArgs, redirect, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { spotifyStrategy } from "~/services/auth.server";
import { getRecommendation } from "~/services/chatgpt.server";
import type { Recommendation } from "~/types";

import { SongRecommendation } from "~/components/SongRecommendation";

export type LoaderData = { recommendation: Recommendation };

export async function loader({ request }: LoaderArgs) {
  const session = await spotifyStrategy.getSession(request);

  if (!session?.user) {
    return redirect("/authorize");
  }
  const recommendation = await getRecommendation(request);
  return json<LoaderData>({ recommendation });
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <SongRecommendation
          data={data.recommendation}
          className="max-w-[720px]"
        />
      </div>
    </>
  );
}
