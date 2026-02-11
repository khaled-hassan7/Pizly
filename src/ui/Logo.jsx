import { Link } from 'react-router-dom';

function Logo() {
  return (
    <Link
      to="/"
      className="absolute left-1/2  -translate-x-1/2  text-3xl font-extrabold tracking-widest sm:static sm:left-auto sm:translate-x-0"
    >
      Pizly
    </Link>
  );
}

export default Logo;
