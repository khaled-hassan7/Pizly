import { CiUser } from 'react-icons/ci';

function UserName() {
  return (
    <div className=" relative flex items-center  gap-2">
      <CiUser className="text-[24px] leading-none" />
      <span className=" absolute text-sm top-2 left-7"></span>
    </div>
  );
}

export default UserName;
