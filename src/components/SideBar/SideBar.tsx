import { NavLink } from "react-router-dom";

import dashboardIcon from "../../assets/dashboard.png";
import transactionIcon from "../../assets/transaction.png";
import raportIcon from "../../assets/raport.png";

const SideBar = ({ asideIsVisible }: { asideIsVisible: boolean }) => {
  return (
    asideIsVisible && (
      <aside className="flex flex-col gap-10 bg-aside">
        <header className="text-center m-2.5 max-md:hidden">
          <span className="text-headlines text-[35px] max-xl:text-[25px] max-lg:text-[20px]">
            Budget Manager
          </span>
        </header>
        <nav className="w-[80%] mx-auto flex flex-col gap-10 max-md:flex-row max-md:h-10 max-md:justify-center max-md:gap-20">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "active flex gap-2.5 items-center  py-2.5 pl-2 pr-30 transition-all duration-100 hover:text-hover hover:bg-active-bg max-md:p-0"
                : "flex gap-2.5 items-center py-2.5 pl-2 pr-30 transition-all duration-100 hover:text-hover hover:bg-active-bg max-md:p-0"
            }
          >
            <img className="nav-icon w-5 h-5" src={dashboardIcon} />
            <span className="max-md:hidden">Dashboard</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active flex gap-2.5 items-center py-2.5 pl-2 pr-30 transition-all duration-100 hover:text-hover hover:bg-active-bg max-md:p-0"
                : "flex gap-2.5 items-center py-2.5 pl-2 pr-30 transition-all duration-100 hover:text-hover hover:bg-active-bg max-md:p-0"
            }
            to={"/transactions"}
          >
            <img className="nav-icon" src={transactionIcon} width={20} />
            <span className="max-md:hidden">Transactions</span>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "active flex gap-2.5 items-center py-2.5 pl-2 pr-30 transition-all duration-100 hover:text-hover hover:bg-active-bg max-md:p-0"
                : "flex gap-2.5 items-center py-2.5 pl-2 pr-30 transition-all duration-100 hover:text-hover hover:bg-active-bg max-md:p-0"
            }
            to={"/raports"}
          >
            <img className="nav-icon" src={raportIcon} width={20} />
            <span className="max-md:hidden">Raports</span>
          </NavLink>
        </nav>
      </aside>
    )
  );
};

export default SideBar;
