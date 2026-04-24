import { createContext, useContext, useState } from 'react';

const HeaderContext = createContext();

export function HeaderProvider({ children, isScrolled }) {
  const [isOpen, setIsOpen] = useState(false);

  
  const value = {
    isScrolled,
    isOpen,
    setIsOpen,
  };

  return <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>;
}

export const useHeader = () => useContext(HeaderContext);