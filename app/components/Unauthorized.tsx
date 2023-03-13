// component for uaunthorized users
import { Form } from "@remix-run/react";

export const Unauthorized = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1>spotify-chatgpt</h1>
      <h2 className="mt-20 mb-11 max-w-[420px] text-center">
        Get music recommendations based on your last spotify liked songs.
      </h2>
      <Form action="/auth/spotify" method="post">
        <button className="btn btn-primary">Authorize</button>
      </Form>
    </div>
  );
};
