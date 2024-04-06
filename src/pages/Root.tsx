import { Outlet } from 'react-router';
import { useContext } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNavbar from '../components/SideNavbar';
import { HeaderContext } from '../header-context';
import Categories from '../components/Categories';
import MainSection from '../components/MainSection';

function RootLayout() {
    const { category } = useContext(HeaderContext);

    return (
        <>
            <Header />
            <MainSection>
                <Outlet />
                {category.isCatOpen && <Categories />}
                <Footer />
            </MainSection>
            <SideNavbar />
        </>
    );
}
export default RootLayout;
