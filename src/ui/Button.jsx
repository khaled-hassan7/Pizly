import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    ' text-sm transtion-colors rounded-full bg-pizly text-white font-semibold  duration-300 hover:bg-pizly-light focus:outline-none    disabled:cursor-not-allowed';

  const style = {
    primary: base + ' px-4 py-3  md:px-6 md:py-4',
    small: base + ' px-4 py-2  md:px-5 md:py-2.5 text-xs  ',
    rounde:
      base +
      ' w-6 h-6 text-sm flex justify-center items-center ',
    secondary:
      ' text-sm transtion-colors border-2 px-4 py-2.5  md:px-6 md:py-3.5  rounded-full  font-semibold text-stone-800 duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed',
  };

  if (to)
    return (
      <Link
        className={style[type]}
        to={to}
        onClick={onClick}
      >
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button
        onClick={onClick}
        className={style[type]}
        disabled={disabled}
      >
        {children}
      </button>
    );

  return (
    <button className={style[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
