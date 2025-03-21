const DateBar = () => {
  return (
    <div className="flex justify-around items-center w-1/2 bg-aside rounded-[5px] py-1">
      <button className="text-[28px] cursor-pointer">&#60;</button>
      <span className="text-[28px]">May 2024</span>
      <button className="text-[28px] cursor-pointer">&#62;</button>
    </div>
  );
};

export default DateBar;
