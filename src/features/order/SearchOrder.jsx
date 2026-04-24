import { useEffect, useRef, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef();
  const navigate = useNavigate();

  function handelSubmit(e) {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/order/${query}`);
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className="flex sm:items-center sm:justify-end">
      <form
        onSubmit={handelSubmit}
        className="relative flex items-center justify-end"
      >
        <CiSearch
          className="z-10 cursor-pointer antialiased sm:text-white"
          size={28}
          onMouseDown={(e) => {
            e.preventDefault();
            setIsOpen((open) => !open);
          }}
        />

        <input
          ref={inputRef}
          placeholder="Search order..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onBlur={() => setIsOpen(false)}
          className={`border-b-[1px] border-black bg-transparent pr-8 outline-none transition-all duration-500 ease-in-out sm:absolute sm:right-0 ${
            isOpen
              ? 'sm:w-64 sm:translate-x-0 sm:opacity-100'
              : 'sm:pointer-events-none sm:w-0 sm:-translate-x-4 sm:opacity-0'
          } `}
        />
      </form>{' '}
    </div>
  );
}

export default SearchOrder;
