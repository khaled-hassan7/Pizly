import Button from './Button';

function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="../../src/assets/images/hero-img-2.jpg"
          alt="Delicious Pizza Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            The best pizza.
            <span className="block text-red-500">
              Straight out of the oven.
            </span>
          </h1>
          <p className="mt-6 w-full max-w-2xl text-center text-lg leading-relaxed text-stone-200 sm:text-xl">
            Experience the authentic taste of Italy with
            Pizly. Fresh ingredients, hand-tossed dough, and
            a whole lot of love.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <Button type="primary" to="menu">
              View Menu
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
