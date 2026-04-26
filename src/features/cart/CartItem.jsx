import UpdateItemQuantity from './UpdateItemQuantity';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice, imageUrl } =
    item;

  return (
    <li className="flex justify-start gap-5 py-5 ">
      <div className="h-[70px] w-[70px] overflow-hidden rounded-xl">
        <img
          src={imageUrl}
          alt=""
          className="h-full w-full"
        />
      </div>
      <div className="flex flex-col flex-1  gap-5">
        <p className="">{name}</p>

        <UpdateItemQuantity
          id={pizzaId}
          quantity={quantity}
          totalPrice={totalPrice}
        />
      </div>
    </li>
  );
}

export default CartItem;
