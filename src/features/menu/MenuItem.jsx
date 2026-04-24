import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  currentQuantityItemById,
} from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/updateItemQuantity';
import useReveal from '../../hooks/useReveal';
function MenuItem({ pizza }) {
  const { triggerRef, hasAppeared } = useReveal();

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
      imageUrl,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li
      className={`flex flex-col items-center justify-start transition-transform duration-[800ms] ease-[cubic-bezier(0.33,1,0.68,1)] sm:gap-5 ${hasAppeared ? 'translate-y-0 opacity-100' : ' translate-y-10 opacity-0'} `}
      ref={triggerRef}
    >
      <div className="flex aspect-square items-center justify-start">
        <img
          src={imageUrl}
          alt={name}
          className={`h-full w-full rounded-3xl object-cover transition-transform duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-lg ${soldOut ? 'opacity-70 grayscale' : ''} `}
        />
      </div>

      <div className="flex min-h-36 flex-col items-center justify-center sm:gap-5">
        <p className="font-bold">{name}</p>
        <p className="text-center text-sm">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex flex-col items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">
              {formatCurrency(unitPrice)}
            </p>
          ) : (
            <p className="px-4 py-2 text-sm font-medium uppercase text-stone-500 md:px-5 md:py-2.5">
              Sold out
            </p>
          )}
          <div className="flex h-10 items-center justify-center">
            {isInCart && (
              <div className="flex gap-2 sm:gap-4">
                <UpdateItemQuantity
                  id={id}
                  quantity={CurrentQuantity}
                />
                <DeleteItem id={id} />
              </div>
            )}

            {!soldOut && !isInCart && (
              <Button type="small" onClick={handelAddItem}>
                ADD TO CART
              </Button>
            )}
          </div>{' '}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
