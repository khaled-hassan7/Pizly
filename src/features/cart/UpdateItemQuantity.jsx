import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import {
  decreasItemQuantity,
  increasItemQuantity,
} from './cartSlice';

function UpdateItemQuantity({ id, CurrentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <Button
        type="rounde"
        onClick={() => dispatch(decreasItemQuantity(id))}
      >
        -
      </Button>
      <span className="text-sm font-semibold">
        {CurrentQuantity}
      </span>
      <Button
        type="rounde"
        onClick={() => dispatch(increasItemQuantity(id))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
