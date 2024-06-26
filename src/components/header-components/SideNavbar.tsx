import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeaderContext } from '../../header-context';
import Hamburger from './Hamburger';

function SideNavbar() {
    console.log('Sidenavbar');
    const { hamburger, favorites } = useContext(HeaderContext);
    const positionClass = !hamburger.isHamburgerOpen ? '-left-72' : '';
    return (
        <nav
            className={`position: absolute top-0 ${positionClass} z-30 w-72 border-red-900 border-2 h-screen flex flex-col gap-4 justify-center items-center text-sky-400 bg-white`}
        >
            <ul className="flex flex-col gap-4 ">
                <li className="text-center">
                    <Link to="/">Comparison</Link>
                </li>
                <li className="text-center">
                    <Link to="/">Payment</Link>
                </li>
                <li className="text-center">
                    <Link to="/">Tracking</Link>
                </li>
                <li className="text-center">
                    <Link to="/">
                        Favorites:{' '}
                        <span className="bg-orange-400 rounded-3xl px-2 text-white">
                            {favorites.items.length}
                        </span>
                    </Link>
                </li>
                <li className="text-center">
                    <Link to="/">Login</Link>
                </li>
            </ul>
            <div className="position: absolute top-3 right-3">
                <Hamburger />
            </div>
        </nav>
    );
}
export default SideNavbar;
