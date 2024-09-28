import React from "react";

export default function Navbar() {
  return (
    <nav className="flex fixed top-8 z-20 justify-center gap-x-64 items-center bg-[hsla(0,0%,93%,0.72)] backdrop-blur-xl text-black py-3 px-5 rounded-full w-[33rem]">
      <div id="logo" className="text-xl font-bold">
        Logo
      </div>
      <ul className="flex gap-3 text-lg font-semibold">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
