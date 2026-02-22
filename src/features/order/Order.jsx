import {
  useFetcher,
  useLoaderData,
} from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import OrderItem from './OrderItem';
import { useEffect } from 'react';
import UpdateOrder from './UpdateOrder';
// Test ID: IIDSAT

function Order() {
  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === 'idle')
        fetcher.load('/menu');
    },
    [fetcher],
  );
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  console.log(priorityPrice )
  return (
    <div className="p-10 pt-40 max-w-4xl mx-auto w-full sm:shadow-md sm:bg-white rounded-xl sm:mb-2">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-xl font-bold">{` Order ${id} Status`}</h2>

        <div className="flex space-x-2">
          {priority && (
            <span className="rounded-full bg-red-600 px-3 py-1 text-sm font-semibold uppercase tracking-wide text-red-50">
              Priority{' '}
            </span>
          )}
          <span className="inline-flex rounded-full bg-green-600 px-3 py-1 text-sm font-semibold uppercase text-red-50">
            {status} order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between rounded-md bg-stone-200 px-6 py-5">
        <p className="spacx-2 font-medium">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-sm text-stone-500">
          (Estimated delivery:{' '}
          {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="de divide-y-2 divide-stone-200 border-b-2 border-stone-200">
        {cart.map((item) => (
          <OrderItem
            item={item}
            key={item.pizzaId}
            ingredients={
              fetcher?.data?.find(
                (el) => el.id === item.pizzaId,
              )?.ingredients ?? []
            }
            isLoadingIngredients={
              fetcher.state === 'loading'
            }
          />
        ))}
      </ul>

      <div className="space-y-2 rounded-md bg-stone-200 px-6 py-5">
        <p className="text-sm text-stone-500">
          Price pizza: {formatCurrency(orderPrice)}
        </p>
        {priority && (
          <p className="text-sm text-stone-500">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="font-medium">
          To pay on delivery:{' '}
          {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export async function loader({ params }) {
  const order = await getOrder(params.orderId);
  return order;
}

export default Order;
