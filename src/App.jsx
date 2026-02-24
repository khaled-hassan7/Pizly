import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import Error from './ui/Error';
import MenuPage, {
  loader as menuLoader,
} from './pages/MinuPage';
import Cart from './features/cart/Cart';
import CreatOrder, {
  action as creatOrderAction,
} from './features/order/CreateOrder';
import Order, {
  loader as loaderOrder,
} from './features/order/Order';
import { action as updateOrderAction } from './features/order/UpdateOrder';
import AppLayOut from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayOut />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <MenuPage />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },

      {
        path: '/order/new',
        element: <CreatOrder />,
        action: creatOrderAction,
      },
      {
        path: '/order/:orderId',
        element: <Order />,
        loader: loaderOrder,
        errorElement: <Error />,
        action: updateOrderAction,
      },

      {
        path: '*',
        element: <Error />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
