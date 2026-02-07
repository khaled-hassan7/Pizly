import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalCartQuantity } from './cartSlice';
import { getTotalCartPrice } from './cartSlice';
import {formatCurrency} from '../../utils/helpers';

function CartOverview() {
  const pizzaQuantity = useSelector(getTotalCartQuantity);
  const pizzaTotalPrice = useSelector(getTotalCartPrice);

  if (!pizzaQuantity) return

  return (
    <div className="flex justify-between bg-stone-800 p-4 text-sm uppercase text-stone-200 sm:p-6 md:text-base">
      <p className="space-x-2 font-semibold text-stone-300 sm:space-x-6">
        <span>{pizzaQuantity} pizzas</span>
        <span>{formatCurrency(pizzaTotalPrice)}</span>
      </p>
      <Link to="/Cart">Cart</Link>
    </div>
  );
}

export default CartOverview;
