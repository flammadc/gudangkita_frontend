import React from 'react'
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
const Topbar = ({ setPopSidebar }) => {
     return (
          <nav className="fixed w-screen top-0 -z-10 sm:h-32 sm:pl-64 sm:px-8 px-5  py-2 flex items-center sm:justify-end  justify-between transition-all ease-linear duration-300">
               <GiHamburgerMenu className="sm:hidden sm:text-3xl cursor-pointer" onClick={() => setPopSidebar(true)} />
               <div className="sm:h-[76px] sm:px-6 sm:bg-white rounded-lg drop-shadow-[0_20px_70px_rgba(86,89,146,0.10)] flex items-center justify-center sm:gap-3 ">
                    <BsPerson className="sm:bg-slate-100 bg-white p-1.5 sm:w-12 sm:h-12 w-8 h-8 rounded-[50%] sm:p-2 shadow" />
                    <div className="flex flex-col">
                         <h1 className="text-[#2C3E50] font-bold sm:text-lg sm:block hidden">Ridho Mustaqim</h1>
                         <p className="text-[#BABEC6] font-light sm:text-sm sm:block hidden">Administrator</p>
                    </div>
               </div>
          </nav>
     )
}

export default Topbar;