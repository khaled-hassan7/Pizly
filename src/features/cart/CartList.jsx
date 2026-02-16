import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { clearCart, getTotalCartPrice } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartList({ setIsOpen, cart }) {
  const dispatch = useDispatch();
  function handelClearCart() {
    dispatch(clearCart());
  }
  const totalCartPrice = useSelector(getTotalCartPrice);

  return (
    <div className="flex h-full flex-col">
      <h2 className="border-b-2 py-5 text-center text-2xl font-extrabold">
        Your order
      </h2>
      <ul className="flex-1 divide-y divide-stone-200 overflow-y-auto border-b border-stone-200 pb-5 pl-6 pt-7">
        {cart.map((cart) => (
          <CartItem item={cart} key={cart.pizzaId} />
        ))}
      </ul>
      <div className="mt-auto flex flex-shrink-0 items-center justify-between py-9">
        <div className="space-x-2 px-2 sm:px-4">
          <Button
            onClick={() => setIsOpen(false)}
            type="primary"
            to="/order/new"
          >
            Order pizzas
          </Button>
          <Button
            type="secondary"
            onClick={handelClearCart}
          >
            Clear cart
          </Button>
        </div>
        <div className="flex items-center justify-center pr-2 sm:pr-4">
          <p className="text-stone-600">
            total price{' '}
            <span className="text-center text-stone-900">
              {formatCurrency(totalCartPrice)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartList;
