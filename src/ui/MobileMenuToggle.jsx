import { IoCloseOutline } from 'react-icons/io5';
import { useHeader } from '../context/HeaderContext';
import { CiAlignLeft } from 'react-icons/ci';

function MobileMenuToggle() {
  const { setIsOpen, isOpen } = useHeader();
  return (
    <button
      className="sm:hidden"
      onClick={() => setIsOpen(!isOpen)}
    >
      {isOpen ? (
        <IoCloseOutline
          className="text-white antialiased"
          size={28}
        />
      ) : (
        <CiAlignLeft
          className="text-white antialiased"
          size={28}
        />
      )}{' '}
    </button>
  );
}

export default MobileMenuToggle;
