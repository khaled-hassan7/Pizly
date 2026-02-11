import SearchOrder from '../features/order/SearchOrder';
import UserName from '../features/user/UserName';

function DesktopNav() {
  return (
    <div className="hidden items-center justify-center gap-5 font-semibold sm:flex">
      <SearchOrder />
      <UserName />
    </div>
  );
}

export default DesktopNav;
