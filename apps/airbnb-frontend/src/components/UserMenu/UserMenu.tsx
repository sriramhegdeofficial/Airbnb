"use client";

import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar/Avatar";

const UserMenu = () => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center">
        <div
          onClick={() => {}}
          className="hidden md:block md:text-xs font-semibold   px-2 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          <p className="line-clamp-1 max-w-[100px]">Airbnb your home</p>
        </div>
        <div
          onClick={() => {}}
          className="p-2 md:p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center md:gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block dropdown dropdown-end">
            <div tabIndex={0}>
              <Avatar />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md w-52 mt-2 shadow-md border-slate-300 border-[1px]"
            >
              <li>
                <a>Login</a>
              </li>
              <li>
                <a>Sign up</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
