import { useHeader } from '../context/HeaderContext';
import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

function MobileMinu() {
  const { isOpen } = useHeader();
  return (
    <div
      className={`absolute left-1/2 top-full m-auto w-[83%] origin-top -translate-x-1/2 transform bg-[#ffffff] shadow-md transition-all duration-300 sm:hidden ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
    >
      <div className="flex flex-col justify-start gap-4 p-4">
        <SearchOrder />
        <UserName />
      </div>
    </div>
  );
}

export default MobileMinu;
