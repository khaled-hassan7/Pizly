import { IoCloseOutline } from "react-icons/io5"
import { useHeader } from "../context/HeaderContext"
import { CiAlignLeft } from "react-icons/ci"

function MobileMenuToggle() {
   const {setIsOpen,isOpen} = useHeader()
    return (
          <button
            className="sm:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoCloseOutline className="text-[28px] text-black" />
            ) : (
              <CiAlignLeft className="text-[28px] text-black" />
            )}{' '}
          </button>
    )
}

export default MobileMenuToggle
