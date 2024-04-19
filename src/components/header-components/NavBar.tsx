import { Link } from 'react-router-dom';
import { FaBalanceScale, FaRegHeart } from 'react-icons/fa';
import { BiWallet } from 'react-icons/bi';
import { RiTruckLine } from 'react-icons/ri';
import { useContext } from 'react';
import { HeaderContext } from '../../header-context';

function NavBar() {
    const { favorites } = useContext(HeaderContext);
    console.log('FAVS', favorites);
    return (
        <nav className="hidden xl:block">
            <ul className="flex gap-6">
                <li>
                    <Link
                        to="/"
                        className="flex flex-col items-center hover:text-sky-400"
                    >
                        <FaBalanceScale className="w-6 h-auto " /> Comparison
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        className="flex flex-col items-center hover:text-sky-400"
                    >
                        <BiWallet className="w-6 h-auto" /> Payment
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        className="flex flex-col items-center hover:text-sky-400"
                    >
                        <RiTruckLine className="w-6 h-auto" /> Tracking
                    </Link>
                </li>
                <li>
                    <Link
                        to="/"
                        className="flex flex-col items-center hover:text-sky-400 position: relative"
                    >
                        <FaRegHeart className="w-6 h-auto" /> Favorites{' '}
                        <span className="text-white position: absolute right-1 w-6 h-6 flex justify-center items-center bg-sky-400 rounded-full">
                            {favorites.items.length}
                        </span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
