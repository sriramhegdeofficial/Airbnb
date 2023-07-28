"use client";

import Navbar from "@/components/Navbar/Navbar";
import RegisterModal from "@/components/RegisterModal/RegisterModal";

import Image from "next/image";
import React from "react";
import { toast } from "react-hot-toast";

export default function Home() {
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  return (
    <>
      <Navbar dialogRef={dialogRef} />
      <RegisterModal ref={dialogRef} dialogRef={dialogRef} />
      <button onClick={() => toast("dfsf")}>click</button>
    </>
  );
}
