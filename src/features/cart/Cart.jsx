import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import SlidePanel from '../../ui/SlidePanel';
import CartList from './CartList';

function Cart({ isOpen, setIsOpen }) {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <SlidePanel setIsOpen={setIsOpen} isOpen={isOpen}>
      {cart.length > 0 ? (
        <CartList setIsOpen={setIsOpen} cart={cart} />
      ) : (
        <EmptyCart setIsOpen={setIsOpen} />
      )}
    </SlidePanel>
  );
}

export default Cart;
