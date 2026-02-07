import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import { clearCart } from './cartSlice';

function Cart() {
  const dispatch = useDispatch();

  const userName = useSelector(
    (state) => state.user.username,
  );
  const cart = useSelector((state) => state.cart.cart);

  function handelClearCart() {
    dispatch(clearCart());
  }

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">
        &larr; Back to menu
      </LinkButton>
      <h2 className="mt-7 text-xl font-bold">
        Your cart , {userName}
      </h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b border-stone-200">
        {cart.map((cart) => (
          <CartItem item={cart} key={cart.pizzaId} />
        ))}
      </ul>
      <div className="mt-5 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={handelClearCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
