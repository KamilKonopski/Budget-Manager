import { useState } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../components/Footer/Footer";
import SideBar from "../components/SideBar/SideBar";
import LoginModal from "../components/Modal/LoginModal";
import SignupModal from "../components/Modal/SignupModal";
import Modal from "../components/UI/Modal";

const RootLayout = () => {
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
      className="bg-background overflow-x-hidden w-full h-screen max-w-[1920px] my-0 mx-auto text-text min-h-screen font-roboto
     grid grid-cols-[350px_1fr] grid-rows-[1fr_auto] max-xl:grid-cols-[250px_1fr]
      max-lg:grid-cols-[200px_1fr] max-md:flex max-md:flex-col z-1"
    >
      <SideBar
        isLogin={setLoginModalVisible}
        isSignup={setSignupModalVisible}
      />
      <main className="max-md:order-first max-md:grow">
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
