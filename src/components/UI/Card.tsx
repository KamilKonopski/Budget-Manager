type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div className="odd:bg-card even:bg-active-bg flex flex-col basis-[15%] min-w-[200px] max-2xl:basis-[20%] max-xl:basis-[25%] max-lg:basis-[30%] rounded-[8px] p-4 relative">
      <button className="bg-transparent cursor-pointer flex flex-col gap-1 absolute top-3 right-2 p-1">
        <div className="w-[3px] h-[3px] rounded-[50%] bg-black"></div>
        <div className="w-[3px] h-[3px] rounded-[50%] bg-black"></div>
        <div className="w-[3px] h-[3px] rounded-[50%] bg-black"></div>
      </button>
      {children}
    </div>
  );
};

export default Card;
