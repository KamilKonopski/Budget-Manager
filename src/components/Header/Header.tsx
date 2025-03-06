import avatar from "../../assets/avatar.png";
// import burgerMenu from "../../assets/menu.png";

const Header = () => {
  return (
    <header className="flex justify-between p-[20px] col-span-2">
      <div>
        <h1 className="text-headlines text-[40px] ">Budget Manager</h1>
      </div>
      <div className="flex gap-[20px] items-center">
        <div className="size-[40px] cursor-pointer">
          <img src={avatar} alt="avatar profilu" />
        </div>
      </div>
    </header>
  );
};

export default Header;
