import { useState, useEffect } from "react";
import { Topbar } from './components/Topbar';
import { Sidebar } from './components/Sidebar';
import { Test } from './components/test';
import { BsPerson } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiCube } from "react-icons/bi";
// import { IoNotificationsOutline } from "react-icons/io5";
// import { IoChevronBackOutline } from "react-icons/io5";

function App() {
  const [popSidebar, setPopSidebar] = useState(false);
  useEffect(() => {
    const keyDownHandler = event => {

      if (event.key === 'Escape') {
        event.preventDefault();

        // 👇️ your logic here
        setPopSidebar(false);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    // 👇️ clean up event listener
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);
  return (
    <div className="relative">
      <Sidebar popSidebar={popSidebar} />
      {/* <nav className={"z-10 sm:w-64 w-1/4 sm:block sm:shadow-none shadow-2xl shadow-gray-600  fixed top-0 bottom-0 left-0 sm:py-10 py-3  bg-secondary transition-all ease-linear duration-300 " + (popSidebar ? "block" : "hidden")}>
        <div className="flex text-stone-100 items-center justify-center gap-1 sm:text-2xl  text-xs font-bold">
          <BiCube />
          <h1 className="">GudangKita</h1>
        </div>
      </nav> */}
      {/* <div className={"sm:hidden fixed top-0 bottom-0 right-0 left-0 bg-slate-100 opacity-50 " + (popSidebar ? "block" : "hidden")} onClick={() => setPopSidebar(false)}></div> */}
      <Test />
      <Topbar setPopSidebar={setPopSidebar} />
      {/* <nav className="fixed w-screen top-0 -z-10 sm:h-32 sm:pl-64 sm:px-8 px-5  py-2 flex items-center sm:justify-end  justify-between transition-all ease-linear duration-300">
        <GiHamburgerMenu className="sm:hidden sm:text-3xl cursor-pointer" onClick={() => setPopSidebar(true)} />
        <div className="sm:h-[76px] sm:px-6 sm:bg-white rounded-lg drop-shadow-[0_20px_70px_rgba(86,89,146,0.10)] flex items-center justify-center sm:gap-3 ">
          <BsPerson className="sm:bg-slate-100 bg-white p-1.5 sm:w-12 sm:h-12 w-8 h-8 rounded-[50%] sm:p-2 shadow" />
          <div className="flex flex-col">
            <h1 className="text-[#2C3E50] font-bold sm:text-lg sm:block hidden">Ridho Mustaqim</h1>
            <p className="text-[#BABEC6] font-light sm:text-sm sm:block hidden">Administrator</p>
          </div>
        </div>
      </nav> */}

    </div>
  );
}

export default App;
