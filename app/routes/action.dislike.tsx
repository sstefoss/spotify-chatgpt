import { type ActionArgs, json } from "@remix-run/node";

import { dislike } from "~/services/data.server";

export async function action({ request }: ActionArgs) {
  let formData = await request.formData();
  const id = parseInt(formData.get("id") as string);

  const result = await dislike(id);
  return json(result, { status: 201 });
}
