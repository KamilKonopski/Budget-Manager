import { NavLink } from "react-router-dom";

import Button from "../UI/Button";

import dashboardIcon from "../../assets/dashboard.png";
import transactionIcon from "../../assets/transaction.png";
import raportIcon from "../../assets/raport.png";
import loginIcon from "../../assets/login.png";
import signUpIcon from "../../assets/signup.png";

type SideBarProps = {
  asideIsVisible: boolean;
  isLogin: React.Dispatch<React.SetStateAction<boolean>>;
  isSignup: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideBar = ({ asideIsVisible, isLogin, isSignup }: SideBarProps) => {
  return (
    asideIsVisible && (
      <aside className="flex flex-col gap-10 bg-aside max-md:flex-row max-md:gap-0">
        <header className="text-center m-2.5 max-md:hidden">
          <span className="text-headlines text-[35px] max-xl:text-[25px] max-lg:text-[20px]">
            Budget Manager
          </span>
        </header>
        <nav className="w-[80%] mx-auto flex flex-col gap-10 grow max-md:flex-row max-md:h-10 max-md:justify-center max-md:gap-20 max-md:w-[60%] max-md:grow-0 max-sm:gap-10">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "active flex gap-2.5 items-center  py-2.5 pl-2 pr-30 transition-all duration-100 hover:text-hover hover:bg-active-bg max-md:p-0"
                : "flex gap-2.5 items-center py-2.5 pl-2 pr-30 transition-all duration-100 hover:text-hover hover:bg-active-bg max-md:p-0"
            }
          >
            <img
              className="icon"
              src={dashboardIcon}
              alt="Dashboard view icon"
              width={20}
            />
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
            <img
              className="icon"
              src={transactionIcon}
              alt="Transaction view icon"
              width={20}
            />
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
            <img
              className="icon"
              src={raportIcon}
              alt="Raport view icon"
              width={20}
            />
            <span className="max-md:hidden">Raports</span>
          </NavLink>
        </nav>
        <div className="flex flex-col gap-6 mb-12 items-center max-md:flex-row max-md:mb-0 max-md:mr-5">
          <Button text="Log in" icon={loginIcon} openModal={isLogin} />
          <Button text="Sign up" icon={signUpIcon} openModal={isSignup} />
        </div>
      </aside>
    )
  );
};

export default SideBar;
