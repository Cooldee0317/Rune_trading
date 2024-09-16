import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  shadow?: boolean;
}

const InputBase = ({
  disabled,
  type,
  placeholder,
  shadow = true,
  ...rest
}: InputProps) => {
  const classNameBuilder = () => {
    let baseClasses =
      'px-4 rounded-md bg-shade-95 border border-gray-600 focus-within:border-gray-400 focus-within:outline-none flex gap-2 items-center w-full py-2';

    let shadowClasses = shadow
      ? 'hover:shadow-[0px_0px_15px_rgba(255,255,255,0.5)] focus-within:shadow-[0px_0px_15px_rgba(255,255,255,0.5)]'
      : '';
    return `${baseClasses} ${shadowClasses}`;
  };

  return (
    <input
      disabled={disabled}
      type={type}
      className={classNameBuilder()}
      placeholder={placeholder}
      {...rest}
    />
  );
};

export default InputBase;
