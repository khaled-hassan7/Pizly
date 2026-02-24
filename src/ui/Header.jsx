import DesktopNav from './DesktopNav';
import Logo from './Logo';
import MobileMinu from './MobileMinu';
import CartOverview from '../features/cart/CartOverview';
import { HeaderProvider } from '../context/HeaderContext';
import MobileMenuToggle from './MobileMenuToggle';
import { useLocation } from 'react-router-dom';

function Header({ isScrolled }) {
  const { pathname } = useLocation();

  const isMenuPage = pathname === '/menu';

  const headerBgClass = isMenuPage
    ? isScrolled
      ? 'bg-pizly'
      : 'bg-pizly/40 '
    : 'bg-pizly';

  return (
    <HeaderProvider isScrolled={isScrolled}>
      <header
        className={`fixed left-0 right-0 z-50 sm:bg-pizly mx-auto flex max-w-7xl items-center justify-between px-8 py-5 transition-all duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] sm:w-[95%] sm:rounded-full sm:shadow-lg ${headerBgClass} ${
          isScrolled
            ? 'sm:mt-0 sm:border-b sm:border-white/20'
            : 'sm:mt-4'
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
