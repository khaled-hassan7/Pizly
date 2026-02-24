import { CiUser } from 'react-icons/ci';

function UserName() {
  return (
    <div className="relative flex items-center gap-2">
      <CiUser
        className="z-10 cursor-pointer antialiased sm:text-white"
        size={28}
      />
      <span className="absolute left-7 top-2 text-sm"></span>
    </div>
  );
}

export default UserName;
