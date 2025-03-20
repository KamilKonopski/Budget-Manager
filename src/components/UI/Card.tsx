type CardProps = {
  children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
  return (
    <div
      className="first:bg-card bg-active-bg first:text-gray-900 text-text flex flex-col
     basis-[15%] min-w-[220px] max-2xl:basis-[20%] max-xl:basis-[25%] max-lg:basis-[30%] rounded-[8px] py-4 px-2 relative"
    >
      {children}
    </div>
  );
};

export default Card;
