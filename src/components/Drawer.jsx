import React from "react";
import { MainContext } from "../context/MainContext";
import { IoCloseOutline } from "react-icons/io5";

const Drawer = ({ children }) => {
  const context = React.useContext(MainContext);
  const { drawer, setDrawer } = context;

  const positions = {
    leftDrawer: `top-0 left-0 ${drawer.isOpen ? "" : "-translate-x-full"}`,
    rightDrawer: `top-0 right-0 ${drawer.isOpen ? "" : "translate-x-full"}`,
  };

  return (
    <div className="relative" id="drawer">
      {drawer.isOpen && (
        <div
          className=" z-20 fixed inset-0 h-full w-full bg-gray-400/50 backdrop-blur-[32px] opacity-70"
          onClick={() => setDrawer({ ...drawer, isOpen: false })}
        ></div>
      )}
      <div
        id="drawer-navigation"
        className={` py-8 px-16 z-30 min-w-[500px] fixed  h-screen   overflow-y-auto transition-transform  bg-white w-64 dark:bg-gray-800"
      aria-labelledby="drawer-navigation-label ${positions[drawer.position]}`}
      >
        <div className="flex items-center justify-between">
          <h5
            id="drawer-navigation-label"
            className="text-2xl font-semibold text-[--text-color-third] dark:text-gray-400 "
          >
            KhoaTran
          </h5>
          <button
            onClick={() => setDrawer({ ...drawer, isOpen: false })}
            type="button"
            data-drawer-hide="drawer-navigation"
            aria-controls="drawer-navigation"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8  inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <IoCloseOutline size={32} />
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Drawer;
