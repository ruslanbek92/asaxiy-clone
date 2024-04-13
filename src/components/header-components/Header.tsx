import { MdOutlineShoppingCart } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import Search from './Search';
import NavBar from './NavBar';
import { HeaderContext } from '../../header-context';
import uzbek from '../../assets/flag-uzbek.svg.png';
import logo from '../../assets/asaxiy-logo.svg';
import Hamburger from './Hamburger';
import SubHeader from './SubHeader';

function Header() {
    const { category } = useContext(HeaderContext);
    const handleCatClick = () => {
        category.setIsCatOpen((prev) => !prev);
    };
    return (
        <header className="position: fixed z-10 top-0 left-0 right-0">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-around py-4 bg-white">
                <h1>
                    <Link to="/">
                        <img
                            src={logo}
                            width="100"
                            height="auto"
                            className="w-28 h-auto"
                            alt="logo"
                        />
                    </Link>
                </h1>
                <button
                    className="bg-sky-400 p-1.5 rounded text-white flex gap-1"
                    onClick={handleCatClick}
                    type="button"
                >
                    {!category.isCatOpen && (
                        <GiHamburgerMenu className="w-6 h-auto" />
                    )}
                    {category.isCatOpen && <IoClose className="w-6 h-auto" />}
                    Catetories
                </button>
                <Search />
                <NavBar />
                <button
                    className="position: relative flex flex-col hover:text-sky-400"
                    type="button"
                >
                    <MdOutlineShoppingCart className="w-6 h-auto" />
                    Cart
                    <span className="text-white position: absolute left-4 w-6 h-6 flex justify-center items-center bg-sky-400 rounded-full">
                        {1}
                    </span>
                </button>
                <button className="flex flex-col items-center " type="button">
                    <img src={uzbek} alt="" className="w-6 h-6 rounded-full" />
                    Ozbekcha
                </button>
                <Hamburger />
                <button
                    className=" flex-col items-center hidden xl:flex"
                    type="button"
                >
                    <CgProfile className="w-6 h-auto" />
                    Log in
                </button>
            </div>
            <SubHeader />
        </header>
    );
}

export default Header;
