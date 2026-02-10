import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartQuantity } from './cartSlice';
import { CiShoppingCart } from 'react-icons/ci';

function CartOverview() {
  const pizzaQuantity = useSelector(getTotalCartQuantity);
  const isQuantity = pizzaQuantity > 0;
  return (
    <div>
      <Link
        to="/cart"
        className="flex items-center justify-center rounded-md transition-transform active:scale-95"
      >
        <span className="relative">
          <CiShoppingCart className="text-[24px]" />
          {isQuantity && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-pizly text-[10px] font-bold text-white">
              <span>{pizzaQuantity}</span>
            </span>
          )}
        </span>
      </Link>
    </div>
  );
}

export default CartOverview;
