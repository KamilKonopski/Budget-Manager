import { useState } from "react";

type LoginModalProps = {
  openSignupModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const LoginModal = ({ openSignupModal }: LoginModalProps) => {
  const [formValue, setFormValue] = useState<{
    email: string;
    password: string;
  }>({
    email: "",
    password: "",
  });
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(formValue.email, formValue.password);

    setFormValue({
      email: "",
      password: "",
    });
    setIsDisabled(true);
  }

  function handleChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormValue((prev) => {
      const updatedForm = { ...prev, [name]: value };

      if (updatedForm.email !== "" && updatedForm.password !== "") {
        setIsDisabled(false);
      } else {
        setIsDisabled(true);
      }

      return updatedForm;
    });
  }

  return (
    <>
      <h2 className="text-[28px] font-bold mb-5 max-2xl:text-[24px]">
        Log in to Budget Manager
      </h2>
      <form
        className="w-full flex flex-col gap-2.5 px-10"
        onSubmit={handleLogin}
      >
        <div className="flex flex-col">
          <label className="text-[14px] font-bold" htmlFor="email">
            Email
          </label>
          <input
            className="border border-text outline-0 py-0.5 px-1 text-[14px] duration-250 hover:shadow-input-hover hover:border-hover focus:shadow-input-active focus:border-active"
            type="email"
            name="email"
            id="email"
            value={formValue.email}
            onChange={handleChangeValue}
            autoFocus
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="text-[14px] font-bold" htmlFor="password">
            Password
          </label>
          <input
            className="border border-text outline-0 py-0.5 px-1 text-[14px] duration-250 hover:shadow-input-hover hover:border-hover focus:shadow-input-active focus:border-active"
            type="password"
            name="password"
            id="password"
            value={formValue.password}
            onChange={handleChangeValue}
            required
          />
        </div>
        <button
          type="submit"
          disabled={isDisabled}
          className="text-[14px] font-bold bg-active py-1 rounded-[3px] mt-4 cursor-pointer duration-250 hover:bg-hover disabled:bg-background disabled:cursor-not-allowed"
        >
          Log in
        </button>
      </form>
      <button
        className="text-[14px] cursor-pointer py-2 px-12 mt-2 rounded-[3px] duration-250 hover:bg-hover"
        onClick={() => openSignupModal(true)}
      >
        Don't have an account? Sign up!
      </button>
    </>
  );
};

export default LoginModal;
