import { Outlet } from 'react-router';
import { useContext } from 'react';
import Header from '../components/header-components/Header';
import Footer from '../components/footer-components/Footer';
import SideNavbar from '../components/header-components/SideNavbar';
import { HeaderContext } from '../header-context';
import Categories from '../components/categories-btn-components/Categories';
import MainSection from '../components/MainSection';

function RootLayout() {
    console.log('RootLayout');
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
