import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getAllRecommendations } from "~/services/data.server";

import { Navbar } from "~/components/Navbar";
import { SongRecommendation } from "~/components/SongRecommendation";

export const loader = async () => {
  return json({ recommendations: await getAllRecommendations() });
};

export default function Library() {
  const data = useLoaderData<typeof loader>();
  const { recommendations } = data;
  return (
    <>
      <Navbar />
      <div className="mt-32 mx-8">
        <h1>Library</h1>
        <div className="flex flex-col h-screen overflow mt-10">
          {recommendations.map((recommendation) => (
            <SongRecommendation
              key={recommendation.id}
              data={recommendation}
              className="mb-8"
            />
          ))}
        </div>
      </div>
    </>
  );
}
