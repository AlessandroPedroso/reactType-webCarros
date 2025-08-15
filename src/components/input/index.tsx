import type { RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
}

export function Input({
  type,
  placeholder,
  name,
  register,
  rules,
  error,
}: InputProps) {
  return (
    <div>
      <input
        className="w-full border-1 border-[#878787] outline-none border-solid rounded-md h-10 px-2"
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        id={name}
      />
      {error && <p className="my-1 text-red-500">{error}</p>}
    </div>
  );
}
