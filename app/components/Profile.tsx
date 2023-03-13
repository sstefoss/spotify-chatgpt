import { useState } from "react";
import { User, ChevronDown, ChevronUp } from "react-feather";

export const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative not-prose">
      <div
        className="flex items-center rounded-full bg-black pr-2 pl-0.5 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="rounded-full bg-gray-700 p-1 mr-2">
          <User size={16} />
        </div>
        <span>stef.orovas</span>
        {!isOpen && <ChevronDown size={16} className="ml-2" />}
        {isOpen && <ChevronUp size={16} className="ml-2" />}
      </div>
      {isOpen && (
        <div className="absolute top-10 right-0 bg-gray-700 w-[200px] p-1.5 rounded-lg">
          <ul>
            <li className="cursor-pointer hover:bg-gray-600 px-4 py-1 rounded-lg">
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
