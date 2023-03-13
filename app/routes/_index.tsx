// app/routes/index.tsx
import {
  type LoaderArgs,
  type ActionArgs,
  redirect,
  json,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { spotifyStrategy } from "~/services/auth.server";
import { getRecommendation } from "~/services/chatgpt.server";
import { like, dislike } from "~/services/data.server";
import type { Recommendation } from "~/types";

import { SongRecommendation } from "~/components/SongRecommendation";
import { Navbar } from "~/components/Navbar";

export type LoaderData = { recommendation: Recommendation };

export async function loader({ request }: LoaderArgs) {
  const session = await spotifyStrategy.getSession(request);

  if (!session?.user) {
    return redirect("/authorize");
  }
  // return chatgpt recomendation
  const recommendation = await getRecommendation(request);
  return json<LoaderData>({ recommendation });
}

export async function action({ request }: ActionArgs) {
  let formData = await request.formData();
  const id = parseInt(formData.get("id") as string);
  const action = formData.get("action");

  switch (action) {
    case "like": {
      await like(id);
      return redirect(request.url);
    }
    case "dislike": {
      await dislike(id);
      return redirect(request.url);
    }
    default: {
      throw new Error("Unknown action");
    }
  }
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <SongRecommendation data={data.recommendation} />
      </div>
    </>
  );
}
