import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  currentQuantityItemById,
} from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/updateItemQuantity';
function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const {
    id,
    name,
    unitPrice,
    ingredients,
    soldOut,
    imageUrl,
  } = pizza;
  const CurrentQuantity = useSelector(
    currentQuantityItemById(id),
  );
  const isInCart = CurrentQuantity > 0;

  function handelAddItem() {
    const newItem = {
      pizzaId: id,
      unitPrice,
      name,
      quantity: 1,
      totalPrice: unitPrice,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''} `}
      />
      <div className="flex flex-grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="text-sm">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex gap-2 sm:gap-4">
              <UpdateItemQuantity
                id={id}
                CurrentQuantity={CurrentQuantity}
              />
              <DeleteItem id={id}></DeleteItem>
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button type="small" onClick={handelAddItem}>
              ADD TO CART
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
