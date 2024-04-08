import { useContext } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { HeaderContext } from '../../header-context';

function Hamburger() {
    const { hamburger } = useContext(HeaderContext);
    const handleMenuClick = () => {
        hamburger.setIsHamburgerOpen((prev) => !prev);
    };
    return (
        <button
            className="xl:hidden z-20"
            onClick={handleMenuClick}
            type="button"
        >
            {!hamburger.isHamburgerOpen && (
                <GiHamburgerMenu className="w-6 h-auto" />
            )}
            {hamburger.isHamburgerOpen && <IoClose className="w-6 h-auto" />}
        </button>
    );
}

export default Hamburger;
