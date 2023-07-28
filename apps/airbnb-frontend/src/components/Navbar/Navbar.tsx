"use client";

import React from "react";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import UserMenu from "../UserMenu/UserMenu";

interface Iprops {
  dialogRef: React.RefObject<HTMLDialogElement>;
}

export default function Navbar({ dialogRef }: Iprops) {
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
          <UserMenu dialogRef={dialogRef} />
        </div>
      </div>
    </>
  );
}
