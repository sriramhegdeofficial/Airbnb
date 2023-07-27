"use client";

import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import UserMenu from "../UserMenu/UserMenu";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 justify-between px-2 md:px-6">
        <div className="flex-1 flex justify-start">
          <Logo src="/images/logo.svg" className="normal-case" />
        </div>
        <div className="flex-2 md:flex-1 flex justify-center">
          <Search />
        </div>
        <div className="flex-1 flex justify-end">
          <UserMenu />
        </div>
      </div>
    </>
  );
}
