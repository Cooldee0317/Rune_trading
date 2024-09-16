import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: string;
  mode?: string;
  disabled?: boolean;
  children: ReactNode;
}

const Button = ({ disabled, mode, size, children, ...rest }: ButtonProps) => {
  const classNameBuilder = () => {
    let baseClasses =
      'transition-all duration-300 ease-in-out rounded-lg flex items-center justify-center border font-bold font-regarn';
    let modeClasses = '';

    switch (mode) {
      case 'primary':
        modeClasses = disabled
          ? 'bg-ord-sky/40 border-ord-sky/10 border-opacity-10'
          : 'bg-ord-sky hover:shadow-[0px_0px_15px_rgba(255,255,255,0.5)] border-ord-sky';
        break;
      case 'secondary':
        modeClasses = disabled
          ? 'border-shade-80/40'
          : 'hover:bg-ord-sky border-ord-sky';
        break;
      case 'tertiary':
        modeClasses = disabled
          ? 'bg-shade-80/20 border-shade-80/10 border-opacity-10'
          : 'bg-shade-80 border-shade-80 hover:border-ord-sky/10 hover:bg-ord-sky/10';
        break;
      default:
        modeClasses = disabled
          ? 'bg-ord-sky/40 border-ord-sky/10 border-opacity-10'
          : 'bg-ord-sky hover:shadow-[0px_0px_15px_rgba(255,255,255,0.5)] border-ord-sky';
        break;
    }

    let sizeClasses = '';
    if (size === 'sm') {
      sizeClasses = 'py-2 px-2 text-sm';
    } else if (size === 'full') {
      sizeClasses = 'py-2 px-6 lg:text-lg w-full text-center';
    } else {
      sizeClasses = 'py-2 px-6 lg:text-lg';
    }

    return `${baseClasses} ${modeClasses} ${sizeClasses}`;
  };

  return (
    <button disabled={disabled} className={classNameBuilder()} {...rest}>
      {children}
    </button>
  );
};

export default Button;
