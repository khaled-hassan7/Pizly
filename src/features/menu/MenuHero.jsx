import { useEffect, useState } from 'react';

import hero1 from '../../assets/images/hero-minu-1.avif';
import hero2 from '../../assets/images/hero-minu-2.avif';
import hero3 from '../../assets/images/hero-minu-3.avif';

const imges = [hero1, hero2, hero3];

function MenuHero() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] =
    useState(true);
  const extendedImages = [...imges, imges[0]];
  const activeIndex = index % imges.length;

  useEffect(function () {
    const interval = setInterval(() => {
      setIndex((e) => e + 1);
      setIsTransitioning(true);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(
    function () {
      if (index === extendedImages.length - 1) {
        const timer = setTimeout(() => {
          setIsTransitioning(false);
          setIndex(0);
        }, 700);
        return () => clearTimeout(timer);
      }
    },
    [extendedImages.length, index],
  );

  return (
    <div className="grid grid-cols-1 self-center justify-self-center lg:grid-cols-12 lg:pt-40">
      <div className="order-2 m-auto flex flex-col items-center justify-center p-5 lg:order-1 lg:col-span-4 lg:col-start-2">
        <h1 className="text-4xl font-extrabold sm:text-6xl">
          Every Slice Tells a Story
        </h1>
        <p className="text-m font-light leading-relaxed md:text-xl">
          Fresh dough, perfectly baked, and topped with
          ingredients bursting with flavor. Every slice is a
          little celebration, a mix of textures, colors, and
          tastes that make your day brighter. The aroma
          invites you in, warming your senses, while each
          bite reveals layers of craftsmanship.
          Hand-selected toppings ensure that every pizza is
          a unique experience, crafted to delight both the
          eyes and the palate.
        </p>
        <p className="mt-4 text-lg font-light leading-relaxed md:text-xl">
          Seasonal, crafted, and simply irresistible —
          pizza, done right. From the classic Margherita to
          bold, inventive creations, each recipe honors
          tradition while embracing modern flavors.
        </p>{' '}
      </div>
      <div className="relative order-1 aspect-[4/4] overflow-hidden rounded-b-[50px] lg:order-2 lg:col-span-6 lg:col-start-7 lg:aspect-[4/3] lg:items-end lg:rounded-[100px]">
        <div
          className="flex h-full"
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: isTransitioning
              ? 'transform 700ms ease-in-out'
              : 'none',
          }}
        >
          {extendedImages.map((src, i) => (
            <div
              key={i}
              className="h-full w-full flex-shrink-0"
            >
              <img
                src={src}
                alt={`hero-pizza-${i}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>{' '}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          {imges.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                activeIndex === i
                  ? 'bg-bizly w-6 bg-pizly'
                  : 'bg-white/50'
              } `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuHero;
