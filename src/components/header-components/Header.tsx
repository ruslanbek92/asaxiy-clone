import { MdOutlineShoppingCart } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import Search from './Search';
import NavBar from './NavBar';
import { HeaderContext } from '../../header-context';
import uzbek from '../../assets/flag-uzbek.svg.png';
import logo from '../../assets/asaxiy-logo.svg';
import Hamburger from './Hamburger';
import SubHeader from './SubHeader';
import { LoginBtn } from './LoginBtn';
import { auth } from '../../firebase';

function Header() {
    console.log('Header');
    const { category } = useContext(HeaderContext);
    const [user, setUser] = useState(null);
    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) setUser(currentUser);
        else setUser(null);
    });
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
                <LoginBtn />
                {user && (
                    <Link
                        className="p-2 border-2 text-white bg-sky-500 bg rounded-lg"
                        to={`/profile/${user.uid}`}
                    >
                        Profile
                    </Link>
                )}
            </div>
            <SubHeader />
        </header>
    );
}

export default Header;
