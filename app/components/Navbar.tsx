import { Link } from "@remix-run/react";
import { Profile } from "./Profile";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-6 font-bold">
      <h2>spotify-chatgpt</h2>
      <div className="flex items-center">
        <Link to="/library" className="mr-10 font-bold">
          Library
        </Link>
        <Profile />
      </div>
    </nav>
  );
};
