import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';
import Loader from './Loader';

function AppLayOut() {
  const navigation = useNavigation();
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {navigation.state === 'loading' && <Loader />}

      <div className="fixed left-0 top-0 z-50 w-full">
        <Header />
      </div>

      <div className="overflow-auto">
        <main className="mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayOut;
