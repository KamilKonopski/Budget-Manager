type ModalProps = {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
};

const Modal = ({ children, closeModal }: ModalProps) => {
  return (
    <div className="overlay">
      <div className="modal">
        <button
          className="absolute top-2.5 right-2.5 py-0.5 px-1 cursor-pointer text-[18px] rounded-[2px] transition-all duration-150 hover:bg-hover"
          onClick={() => closeModal(false)}
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
