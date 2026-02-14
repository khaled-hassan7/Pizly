import { useLoaderData } from 'react-router-dom';
import Minu from '../features/menu/Menu';
import { getMenu } from '../services/apiRestaurant';

function MinuPage() {
  const menu = useLoaderData();

  return (
    <div>
      <Minu menu={menu} />
    </div>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default MinuPage;
