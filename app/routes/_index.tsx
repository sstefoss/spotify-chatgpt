// app/routes/index.tsx
import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData, Form } from "@remix-run/react";

import { spotifyStrategy } from "~/services/auth.server";

export async function loader({ request }: LoaderArgs) {
  return spotifyStrategy.getSession(request);
}

export default function Index() {
  const data = useLoaderData<typeof loader>();
  const user = data?.user;
  return (
    <div>
      <h1>spotify-chatgpt</h1>
      {/* <AuthForm /> */}
      <Form action={user ? "/logout" : "/auth/spotify"} method="post">
        <button>{user ? "Logout" : "Log in with Spotify"}</button>
      </Form>
    </div>
  );
}
