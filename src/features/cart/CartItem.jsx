import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './updateItemQuantity';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 font-semibold sm:flex sm:items-center sm:justify-between">
      <p className="mb-2 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between text-sm font-bold sm:space-x-2">
        <p>{formatCurrency(totalPrice)}</p>
        <div className="flex items-center gap-2 sm:gap-4">
          <UpdateItemQuantity id={pizzaId} />
          <DeleteItem id={pizzaId}></DeleteItem>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
