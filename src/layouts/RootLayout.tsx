import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import SideBar from "../components/SideBar/SideBar";

const RootLayout = () => {
  return (
    <div className="bg-background text-text min-h-screen font-roboto grid grid-cols-[350px_1fr] grid-rows-[auto_1fr_auto]">
      <Header />
      <SideBar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;

// grid-template-areas:
//     "header header"
//     "menu content"
//     "footer footer";
//   grid-template-columns: 1fr 3fr;
