import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import {
  decreasItemQuantity,
  increasItemQuantity,
} from './cartSlice';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { formatCurrency } from '../../utils/helpers';

function UpdateItemQuantity({ id, quantity, totalPrice }) {
  const dispatch = useDispatch();
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center justify-between rounded-full border p-2">
        <Button
          aria-label="Decrease quantity"
          type="rounde"
          onClick={() => dispatch(decreasItemQuantity(id))}
        >
          <FiMinus className="text-lg" />
        </Button>
        <span className="w-6 text-center text-base text-stone-500">
          {quantity}
        </span>
        <Button
          aria-label="Increase quantity"
          type="rounde"
          onClick={() => dispatch(increasItemQuantity(id))}
        >
          <FiPlus className="text-lg" />
        </Button>
      </div>
      {totalPrice && (
        <div className="pr-5">
          <p>{formatCurrency(totalPrice)}</p>
        </div>
      )}
    </div>
  );
}

export default UpdateItemQuantity;
