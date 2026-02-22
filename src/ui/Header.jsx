import DesktopNav from './DesktopNav';
import Logo from './Logo';
import MobileMinu from './MobileMinu';
import CartOverview from '../features/cart/CartOverview';
import { HeaderProvider } from '../context/HeaderContext';
import MobileMenuToggle from './MobileMenuToggle';

function Header({ isScrolled }) {
  return (
    <HeaderProvider isScrolled={isScrolled}>
      <header
        className={`fixed left-0 right-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-8 py-5 transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] sm:mt-4 sm:w-[95%] sm:rounded-full sm:border-stone-300 sm:bg-pizly sm:shadow-lg ${
          isScrolled ? 'bg-white/90 backdrop-blur-md' : ''
        } `}
      >
        {/* for mobile */}
        <div className="flex items-center gap-4">
          <MobileMenuToggle />
          <Logo />
        </div>

        {/* for desktop */}
        <div className="flex items-center gap-5">
          <DesktopNav />
          <CartOverview />
        </div>

        <MobileMinu />
      </header>
    </HeaderProvider>
  );
}

export default Header;
