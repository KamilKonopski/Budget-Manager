type ButtonProps = {
  text: string;
  icon: string;
  openModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const Button = ({ text, icon, openModal }: ButtonProps) => {
  return (
    <button
      className="cursor-pointer flex gap-2.5 items-center transition-all duration-100 hover:text-hover"
      onClick={() => openModal(true)}
    >
      <img className="icon" src={icon} alt={`${text} icon`} width={20} />
      <span className="max-md:hidden">{text}</span>
    </button>
  );
};

export default Button;
