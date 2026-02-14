import MenuItem from './MenuItem';
import MenuHero from './MenuHero';

function Menu({ menu }) {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <MenuHero />

      <div className="">
        <h2 className="text-6xl font-extrabold text-pizly sm:text-8xl">
          our menu
        </h2>
      </div>

      <ul className="grid grid-cols-2 gap-5 px-2 sm:grid-cols-[auto_auto_auto] sm:gap-20 sm:px-0">
        {menu.map((pizza) => (
          <MenuItem pizza={pizza} key={pizza.id} />
        ))}
      </ul>
    </div>
  );
}

export default Menu;
