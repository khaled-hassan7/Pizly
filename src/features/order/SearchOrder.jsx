import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  function handelSubmit(e) {
    e.preventDefault();
    navigate(`/order/${query}`);
  }
  return (
    <form onSubmit={handelSubmit}>
      <input
        placeholder="search order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full px-5 py-1 text-xs outline-none transition-all duration-300 placeholder:text-stone-400 focus:w-36 focus:ring focus:ring-yellow-500 sm:py-4 sm:text-sm sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
