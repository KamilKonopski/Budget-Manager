import { useState } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import SideBar from "../components/SideBar/SideBar";

import burgerMenu from "../assets/burger-menu.png";

const RootLayout = () => {
  const [asideIsVisible, setAsideIsVisible] = useState<boolean>(true);

  return (
    <div
      className="bg-background overflow-x-hidden w-full h-screen text-text min-h-screen font-roboto
     grid grid-cols-[350px_1fr] grid-rows-[1fr_auto] max-xl:grid-cols-[250px_1fr]
      max-lg:grid-cols-[200px_1fr] max-md:flex max-md:flex-col"
    >
      <SideBar asideIsVisible={asideIsVisible} />
      <main className="max-md:order-first max-md:grow">
        <div
          onClick={() => setAsideIsVisible((prev) => !prev)}
          className="w-10 h-10 cursor-pointer max-md:hidden"
        >
          <img className="w-full" src={burgerMenu} alt="menu bar" />
        </div>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
