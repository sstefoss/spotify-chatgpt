// app/routes/index.tsx
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { spotifyStrategy } from "~/services/auth.server";
import { Unauthorized } from "~/components/Unauthorized";
import { Recommendation } from "~/components/Recommendation";

export async function loader({ request }: LoaderArgs) {
  return spotifyStrategy.getSession(request);
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const user = data?.user;
  if (user) {
    return <Recommendation />;
  }

  return <Unauthorized />;
}
