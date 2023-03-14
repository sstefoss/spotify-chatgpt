import {
  type MetaFunction,
  type LinksFunction,
  type LoaderArgs,
  json,
} from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { spotifyStrategy } from "~/services/auth.server";
import { Navbar } from "~/components/Navbar";
import styles from "./styles/app.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
  { rel: "shortcut icon", href: "/favicon.ico", type: "image/x-icon" },
  { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
];

export async function loader({ request }: LoaderArgs) {
  const session = await spotifyStrategy.getSession(request);

  if (!session?.user) {
    return json({ isLoggedIn: false });
  }
  return json({ isLoggedIn: true });
}

export default function App() {
  const data = useLoaderData<typeof loader>();
  return (
    <html lang="en" className="prose dark:prose-invert">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="dark:bg-gray-900 bg-slate w-screen h-screen">
        {data.isLoggedIn && <Navbar />}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
