import {
  CiAlignLeft,
} from 'react-icons/ci';
import { useState } from 'react';
import DesktopNav from './DesktopNav';
import Logo from './Logo';
import MobileMinu from './MobileMinu';
import CartOverview from '../features/cart/CartOverview';
import { IoCloseOutline } from 'react-icons/io5';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="mx-auto mt-4 flex w-[95%] max-w-7xl items-center justify-between sm:rounded-full sm:border-stone-300 sm:bg-pizly px-8 py-5 sm:shadow-lg">
      <div className="flex items-center gap-4 ">
        <button
          className="sm:hidden "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <IoCloseOutline className="text-[28px] sm:text-black text-white" />
          ) : (
            <CiAlignLeft className="text-[28px] sm:text-black text-white" />
          )}{' '}
        </button>
        <Logo />
      </div>

      <div className="flex items-center gap-5">
        <DesktopNav />
        <CartOverview />
      </div>

      <MobileMinu isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

export default Header;
