import { useState } from "react";
import { Form } from "@remix-run/react";
import { User, ChevronDown, ChevronUp } from "react-feather";

export const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative not-prose">
      <div
        className="flex items-center rounded-full bg-black pr-2 pl-0.5 cursor-pointer hover:bg-gray-800"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="rounded-full bg-gray-700 p-1.5 mr-2">
          <User size={20} />
        </div>
        <span>stef.orovas</span>
        {!isOpen && <ChevronDown size={16} className="ml-2" />}
        {isOpen && <ChevronUp size={16} className="ml-2" />}
      </div>
      {isOpen && (
        <div className="absolute top-10 right-0 bg-gray-700 w-[200px] p-1.5 rounded-lg">
          <ul>
            <li className="cursor-pointer hover:bg-gray-600 px-4 py-1 rounded-lg">
              <Form action="/logout" method="post">
                <button name="action" value="logout">
                  Logout
                </button>
              </Form>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
