import React from "react";
import { BiCube } from "react-icons/bi";


export default function Sidebar({
  popSidebar
}) {
  return (
    <nav className={"z-10 sm:w-64 w-1/4 sm:block sm:shadow-none shadow-2xl shadow-gray-600  fixed top-0 bottom-0 left-0 sm:py-10 py-3  bg-secondary transition-all ease-linear duration-300 " + (popSidebar ? "block" : "hidden")}>
      <div className="flex text-stone-100 items-center justify-center gap-1 sm:text-2xl  text-xs font-bold">
        <BiCube />
        <h1 className="">GudangKita</h1>
      </div>
    </nav>
  )
}
