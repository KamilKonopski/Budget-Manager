import { useState } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import SideBar from "../components/SideBar/SideBar";
import LoginModal from "../components/Modal/LoginModal";
import SignupModal from "../components/Modal/SignupModal";

import burgerMenu from "../assets/burger-menu.png";
import Modal from "../components/UI/Modal";

const RootLayout = () => {
  const [asideIsVisible, setAsideIsVisible] = useState<boolean>(true);
  const [loginModalVisible, setLoginModalVisible] = useState<boolean>(false);
  const [signupModalVisible, setSignupModalVisible] = useState<boolean>(false);

  function openSignup() {
    setLoginModalVisible(false);
    setSignupModalVisible(true);
  }

  function openLogin() {
    setSignupModalVisible(false);
    setLoginModalVisible(true);
  }

  return (
    <div
      className="bg-background overflow-x-hidden w-full h-screen text-text min-h-screen font-roboto
     grid grid-cols-[350px_1fr] grid-rows-[1fr_auto] max-xl:grid-cols-[250px_1fr]
      max-lg:grid-cols-[200px_1fr] max-md:flex max-md:flex-col z-1"
    >
      <SideBar
        asideIsVisible={asideIsVisible}
        isLogin={setLoginModalVisible}
        isSignup={setSignupModalVisible}
      />
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
      {loginModalVisible && (
        <Modal closeModal={setLoginModalVisible}>
          <LoginModal openSignupModal={openSignup} />
        </Modal>
      )}
      {signupModalVisible && (
        <Modal closeModal={setSignupModalVisible}>
          <SignupModal openLoginModal={openLogin} />
        </Modal>
      )}
    </div>
  );
};

export default RootLayout;
