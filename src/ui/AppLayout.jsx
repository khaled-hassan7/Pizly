import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader';
import CartOverview from '../features/cart/CartOverview';

function AppLayOut() {
  const navigation = useNavigation();
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {navigation.state === 'loading' && <Loader />}
      <Header />

      <div className="overflow-auto">
        <main className="mx-auto max-w-3xl">
          <Outlet />
        </main>
      </div>

      <CartOverview />
    </div>
  );
}

export default AppLayOut;
