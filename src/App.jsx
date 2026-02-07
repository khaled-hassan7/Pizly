import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './ui/Home';
import Error from './ui/Error';
import Menu, {
  loader as menuLoader,
} from './features/menu/Menu';
import Cart from './features/cart/Cart';
import CreatOrder, {
  action as creatOrderAction,
} from './features/order/CreateOrder';
import Order, {
  loader as loaderOrder,
} from './features/order/Order';
import { action as updateOrderAction } from './features/order/UpdateOrder';
import AppLayOut from './ui/AppLayOut';

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
        element: <Menu />,
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
