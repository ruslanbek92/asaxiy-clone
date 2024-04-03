import { Outlet } from 'react-router';

function RootLayout() {
    return (
        <>
            <header>Header</header>
            <Outlet />
            <footer>Footer</footer>
        </>
    );
}
export default RootLayout;
