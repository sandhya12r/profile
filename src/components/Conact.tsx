import React from "react";
import { Meteors } from "./ui/meteors";

export default function Contact() {
  return (
    <div id="contact" className="h-[40rem] w-full dark:bg-black relative flex flex-col items-center justify-center overflow-hidden">

      <h1 className="text-3xl font-bold m-8 text-center z-10">
        Contact Me
      </h1>

      <p className="font-normal text-base text-slate-500 mb-4 relative z-50">

      </p>

      <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
        Explore
      </button>
      <div className="relative w-full h-full overflow-hidden">
        <Meteors number={100} className="absolute " />
      </div>
    </div>
  );
}