import { useState } from "react";
import { BiCube } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoNotificationsOutline } from "react-icons/io5";

function App() {
  const [popSidebar, setPopSidebar] = useState(false);
  return (
    <div className="relative">
      <nav className={"sm:w-64 sm:block  fixed top-0 bottom-0 left-0 sm:py-10 py-3  bg-secondary transition-all ease-linear duration-300 " + (popSidebar ? "block" : "hidden")}>
        <div className="flex text-stone-100 items-center justify-center gap-1 sm:text-2xl text-lg font-bold">
          <BiCube />
          <h1 className="">GudangKita</h1>
        </div>
        <button className={"sm:hidden block  top-0 right-0 z-10"} onClick={() => setPopSidebar(false)}>close</button>
      </nav>

      <nav className="fixed w-screen top-0 -z-10 h-32 sm:pl-64 px-8 flex items-center sm:justify-end  justify-between transition-all ease-linear duration-300">
        <GiHamburgerMenu
          className="sm:hidden text-3xl cursor-pointer"
          onClick={() => setPopSidebar(true)}
        />
        <div className="h-[76px] px-6 bg-white rounded-lg drop-shadow-[0_20px_70px_rgba(86,89,146,0.10)] flex items-center justify-center gap-3 ">
          <BsPerson className="bg-slate-100 w-12 h-12 rounded-[50%] p-2" />
          <div className="flex flex-col">
            <h1 className="text-[#2C3E50] font-bold text-lg">Ridho Mustaqim</h1>
            <p className="text-[#BABEC6] font-light text-sm">Administrator</p>
          </div>
          {/* <IoNotificationsOutline className="bg-slate-100 w-12 h-12 rounded-[50%] p-3 ml-11" /> */}
        </div>
      </nav>
    </div>
  );
}

export default App;
