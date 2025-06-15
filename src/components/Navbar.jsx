import React from "react";
import Drawer from "../components/Drawer";
import Select from "../components/selectLang";
import { MainContext } from "../context/MainContext";
import { PiList } from "react-icons/pi";
import { IoCloseOutline } from "react-icons/io5";
import { ThemeToggleButton } from "../components/common/ThemeToggleButton";
import { useTranslate } from "../hooks/useTranslate";

const Navbar = () => {
  const { t, changeLanguage, lang } = useTranslate();
  const context = React.useContext(MainContext);
  const { drawer, setDrawer, languagePage, navData, tab, setTab } = context;
  const toggleLang = () => {
    changeLanguage(languagePage === "en" ? "vi" : "en");
  };
  return (
    <>
      <Drawer>
        <div className=" h-[100vh-80px]   flex flex-col  items-center gap-4 py-8 dark:text-white/[0.9]">
          {navData.map((item) => (
            <a
              key={Math.random()}
              className={`${
                tab === item &&
                "bg-black text-white dark:bg-white/[0.9] dark:text-black/[0.8]"
              } p-1 px-3 hover:bg-black dark:hover:bg-white/[0.9] dark:hover:text-black/[0.8] hover:text-white rounded-full font-medium cursor-pointer`}
              onClick={() => {
                setDrawer({ ...drawer, isOpen: false });
                setTab(item);
              }}
            >
              {item}
            </a>
          ))}
          <div className="lg:hidden block   m-auto">
            <ThemeToggleButton />
          </div>
          <Select callback={(e) => changeLanguage(e)} />
        </div>
      </Drawer>

      <nav
        id="header"
        className="w-full h-[80px] dark:bg-gray-900 bg-[var(--body-color)] flex itams-center px-8 lg:px-16 justify-between sticky top-0 z-10"
      >
        <div className="relative flex gap-2 items-center">
          <p className="text-3xl font-bold dark:text-[var(--third-color)] text-[var(--text-color-third)]">
            KhoaTran
          </p>
          <span className=" text-4xl dark:text-white/[0.9]">.</span>
        </div>
        <div className="flex-1 hidden lg:block" id="myNavMenu">
          <div className="h-full flex justify-center gap-4 items-center dark:text-white/[0.9]">
            {navData.map((item) => (
              <a
                key={Math.random()}
                className={`${
                  tab === item &&
                  "bg-black text-white dark:bg-white/[0.9] dark:text-black/[0.8]"
                } p-1 px-3 hover:bg-black dark:hover:bg-white/[0.9] dark:hover:text-black/[0.8] hover:text-white rounded-full font-medium cursor-pointer`}
                onClick={() => setTab(item)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="hidden lg:block   m-auto">
          <ThemeToggleButton />
        </div>
        <div className="hidden lg:block ">
          <Select callback={(e) => changeLanguage(e)} />
        </div>
        <div
          className="block lg:hidden flex items-center dark:text-white/[0.9]"
          onClick={() =>
            setDrawer({
              ...drawer,
              isOpen: !drawer.isOpen,
              position: "rightDrawer",
            })
          }
        >
          {/* <i className="font-xl" onClick={myMenuFunction}></i> */}
          {!drawer.isOpen ? <PiList size={32} /> : <IoCloseOutline size={32} />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
