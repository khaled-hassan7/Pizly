import {
  Form,
  redirect,
  useActionData,
  useNavigation,
} from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCart from '../cart/EmptyCart';
import {
  clearCart,
  getTotalCartPrice,
} from '../cart/cartSlice';
import store from '../../store';
import { useState } from 'react';
import { fetchAddress } from '../user/userSlice';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const errors = useActionData();
  const navigation = useNavigation();
  const submitting = navigation.state === 'submitting';

  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector((state) => state.cart.cart);

  const {
    username,
    status: addresStatus,
    position,
    address,
    error: errorAdress,
  } = useSelector((state) => state.user);
  const isLoadingAddress = addresStatus === 'loading';

  const dispatch = useDispatch();
  const totalCartPrice = useSelector(getTotalCartPrice);
  const prioprtyPrice = withPriority
    ? totalCartPrice * 0.2
    : 0;
  const totalPrice = totalCartPrice + prioprtyPrice;

  if (!cart.length) return <EmptyCart isFullPage={true} />;
  return (
    <div className="p-5 pt-40 max-w-2xl mx-auto w-full sm:shadow-md sm:bg-white rounded-xl  sm:pb-12 ">
      <h2 className="mb-8 text-xl font-bold">
        Ready to order? Let's go!
      </h2>
      <Form method="POST">
        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-36">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input grow"
            defaultValue={username}
          />
        </div>

        <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-36">
            Phone number
          </label>
          <div className="grow">
            <input
              type="tel"
              name="phone"
              required
              className="input w-full"
            />
            {errors?.phone && (
              <p className="mt-2 w-fit rounded-md bg-red-100 p-1 text-sm">
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-4 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-36">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
              defaultValue={address}
              disabled={isLoadingAddress}
            />
            {addresStatus === 'error' && (
              <p className="mt-2 w-fit rounded-md bg-red-100 p-1 text-sm">
                {errorAdress}
              </p>
            )}
          </div>
          {!position.longitude && !position.latitude && (
            <span className="z-15 absolute right-1 top-10 sm:right-0.5 sm:top-1.5">
              <Button
                disabled={isLoadingAddress}
                type="small"
                onClick={(e) => {
                  e.preventDefault();
                  dispatch(fetchAddress());
                }}
              >
                {' '}
                GET POSITION
              </Button>
            </span>
          )}
        </div>

        <div className="mb-12 flex items-center gap-2">
          <input
            className="h-4 w-4 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) =>
              setWithPriority(e.target.checked)
            }
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input
            type="hidden"
            name="cart"
            value={JSON.stringify(cart)}
          />
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.latitude
                ? `${position.latitude},${position.longitude}`
                : ''
            }
          />
          <Button
            disabled={submitting || isLoadingAddress}
            type="primary"
          >
            {' '}
            {submitting
              ? 'submitting..'
              : ` Order now from ${totalPrice}`}{' '}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);

  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true',
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone = 'pleas give us a valid number';
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
