import { useSelector } from 'react-redux';
import { getTotalCartQuantity } from './cartSlice';
import { CiShoppingCart } from 'react-icons/ci';
import { useState } from 'react';
import Cart from './Cart';

function CartOverview() {
  const [isOpen, setIsOpen] = useState(false);
  const pizzaQuantity = useSelector(getTotalCartQuantity);
  const isQuantity = pizzaQuantity > 0;

  return (
    <div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen((prev) => !prev);
        }}
        className="flex items-center justify-center rounded-md transition-transform active:scale-95"
      >
        <span className="relative">
          <CiShoppingCart className=" text-white antialiased  " size={30} />
          {isQuantity && (
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-amber-400 text-[10px] font-bold text-white">
              <span>{pizzaQuantity}</span>
            </span>
          )}
        </span>
      </button>

      <Cart isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default CartOverview;
