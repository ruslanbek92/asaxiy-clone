import { Outlet } from 'react-router';
import { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNavbar from '../components/SideNavbar';
import { HeaderContext } from '../header-context';
import Categories from '../components/Categories';

function RootLayout() {
    const { category } = useContext(HeaderContext);

    return (
        <>
            <Header />
            {!category.isCatOpen && (
                <>
                    {' '}
                    <Outlet />
                    <Footer />
                </>
            )}
            {category.isCatOpen && <Categories />}
            <SideNavbar />
        </>
    );
}
export default RootLayout;
