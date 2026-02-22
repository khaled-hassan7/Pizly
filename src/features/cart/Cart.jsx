import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart';
import SlidePanel from '../../ui/SlidePanel';
import CartList from './CartList';
import { createPortal } from 'react-dom';

function Cart({ isOpen, setIsOpen }) {
  const cart = useSelector((state) => state.cart.cart);

const content = (
    <SlidePanel setIsOpen={setIsOpen} isOpen={isOpen}>
      {cart.length > 0 ? (
        <CartList setIsOpen={setIsOpen} cart={cart} />
      ) : (
        <EmptyCart setIsOpen={setIsOpen} />
      )}
    </SlidePanel>
  );

  return createPortal(content, document.body);}

export default Cart;
