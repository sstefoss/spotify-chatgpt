import { type ActionArgs, json } from "@remix-run/node";

import { like } from "~/services/data.server";

export async function action({ request }: ActionArgs) {
  let formData = await request.formData();
  const id = parseInt(formData.get("id") as string);
  console.log("liked id", id);

  const result = await like(id);
  // return your
  return json(result, { status: 201 });
}
