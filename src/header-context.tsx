import { createContext, useMemo, useState } from 'react';

export const HeaderContext = createContext();
export function HeaderContextProvider({ children }) {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
    const [isCatOpen, setIsCatOpen] = useState(false);
    const [favoriteItems, setFavoriteItems] = useState([]);
    const ctxValue = useMemo(() => {
        return {
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
                    if (isNotAdded) {
                        setFavoriteItems((prevItems) => [...prevItems, item]);

                        return;
                    }
                    setFavoriteItems((prevItems) =>
                        prevItems.filter(
                            (element) => element.title !== item.title
                        )
                    );
                },
            },
        };
    }, [isHamburgerOpen, isCatOpen, favoriteItems]);

    return (
        <HeaderContext.Provider value={ctxValue}>
            {children}
        </HeaderContext.Provider>
    );
}
