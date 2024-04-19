import { createContext, useMemo, useState } from 'react';

export const HeaderContext = createContext();
export function HeaderContextProvider({ children }) {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isCatOpen, setIsCatOpen] = useState(false);
    const [favoriteItems, setFavoriteItems] = useState([]);
    const ctxValue = {
        hamburger: {
            isHamburgerOpen,
            setIsHamburgerOpen,
        },
        category: {
            isCatOpen,
            setIsCatOpen,
        },
        favorites: {
            items: favoriteItems,
            addItem(item) {
                const isNotAdded = !favoriteItems.find(
                    (element) => element.title === item.title
                );
                console.log('isNotAdded', isNotAdded);
                if (isNotAdded) {
                    setFavoriteItems((prevItems) => [...prevItems, item]);

                    return;
                }
                setFavoriteItems((prevItems) =>
                    prevItems.filter((element) => element.title !== item.title)
                );
            },
        },
    };

    return (
        <HeaderContext.Provider value={useMemo(() => ctxValue)}>
            {children}
        </HeaderContext.Provider>
    );
}
