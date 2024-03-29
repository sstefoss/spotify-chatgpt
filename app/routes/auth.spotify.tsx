// app/routes/auth/spotify.tsx
import type { ActionArgs } from "@remix-run/node";

import { authenticator } from "~/services/auth.server";

export async function action({ request }: ActionArgs) {
  return await authenticator.authenticate("spotify", request);
}
