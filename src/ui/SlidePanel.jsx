import { CiShoppingCart } from 'react-icons/ci';
import { IoCloseOutline } from 'react-icons/io5';

function SlidePanel({ children, setIsOpen, isOpen }) {
  return (
    <div
      className={`fixed inset-y-0 right-0 z-[100] flex h-screen w-full flex-col bg-white shadow-2xl transition-transform duration-[800ms] ease-[cubic-bezier(0.33,1,0.68,1)] sm:w-[500px] ${isOpen ? 'translate-x-0' : 'translate-x-full'} `}
    >
      <header className="flex w-full items-center justify-between border-b-2 p-5">
        <div className="flex items-center justify-center gap-2">
          <CiShoppingCart className="rounded-full bg-pizly p-1 text-3xl text-white" />{' '}
          <span className="text-2xl font-extrabold">
            Your pickup order
          </span>
        </div>
        <button
          aria-label="Close"
          onClick={() => setIsOpen(false)}
        >
          <IoCloseOutline className="text-4xl text-black" />
        </button>
      </header>
      <main className="flex-grow overflow-y-auto">
        {children}
      </main>
    </div>
  );
}

export default SlidePanel;
