import { Form } from "@remix-run/react";
import type { ActionArgs } from "@remix-run/node";
import { openai } from "~/services/chatgpt.server";

export async function action({ request }: ActionArgs) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Hello world",
  });
  console.log(completion.data.choices[0].text);
  return null;
}

export default function ChatGPT() {
  return (
    <Form action="." method="post">
      <input type="text" name="message" />
      <button type="submit" name="intent">
        Send
      </button>
    </Form>
  );
}
