import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader';
import useScroll from '../hooks/useScroll';

function AppLayOut() {
  const navigation = useNavigation();
  const { triggerRef, isScrolled } = useScroll();
  return (
    <div className="relative h-screen">
      {/* Background Layer */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-b from-[#f8f4f2] to-white" />

      {navigation.state === 'loading' && <Loader />}

      <div className="fixed left-0 top-0 z-50 w-full">
        <Header isScrolled={isScrolled} />
      </div>

      <main className="mx-auto">
        <div
          ref={triggerRef}
          className="absolute top-[1px] h-1 w-full" // الديف نفسه نازل 100 بكسل
        />{' '}
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayOut;
