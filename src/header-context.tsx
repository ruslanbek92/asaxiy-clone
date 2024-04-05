import { createContext, useMemo, useState } from 'react';

export const HeaderContext = createContext();
export function HeaderContextProvider({ children }) {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isCatOpen, setIsCatOpen] = useState(false);
    const ctxValue = {
        hamburger: {
            isHamburgerOpen,
            setIsHamburgerOpen,
        },
        category: {
            isCatOpen,
            setIsCatOpen,
        },
    };

    return (
        <HeaderContext.Provider value={useMemo(() => ctxValue, [])}>
            {children}
        </HeaderContext.Provider>
    );
}
