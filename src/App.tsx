import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import RootLayout from './pages/Root';
import FixedProducts from './pages/FixedProducts';
import { HeaderContextProvider } from './header-context';
import Products from './pages/Products';
import ProductCategory from './pages/ProductCategory';
import CompareProducts from './pages/CompareProducts';
import OrderPay from './pages/OrderPay';
import OrderTrack from './pages/OrderTrack';
import Favorites from './pages/Favorites';
import queryClient from './util/query';
import ProductDetail from './components/product-components/ProductDetail';
import Profile from './pages/Profile';
import Registration from './pages/Registration';
import Cart from './pages/Cart';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '/', element: <FixedProducts /> },
            { path: '/compare', element: <CompareProducts /> },
            { path: '/favorites', element: <Favorites /> },
            { path: '/order-pay', element: <OrderPay /> },
            { path: '/order-status', element: <OrderTrack /> },
            { path: '/product', element: <Products /> },
            { path: '/registration', element: <Registration /> },
            { path: '/cart', element: <Cart /> },
            {
                path: '/product/category/:productCategory',
                element: <ProductCategory />,
            },
            {
                path: '/profile/:userId',
                element: <Profile />,
            },
            {
                path: '/product/category/:productCategory/:productSubCategory',
                element: <ProductCategory />,
            },
            {
                path: '/product/category/:productCategory/:productSubCategory/:thirdLevelCategory',
                element: <ProductCategory />,
            },
            {
                path: '/product/detail/:productDetail',
                element: <ProductDetail />,
            },
        ],
    },
]);
function App() {
    console.log('App');
    useEffect(() => {
        // addCategories();
        // addCategoryDetails();
        // addProducts();
        // addReviews();
    }, []);

    return (
        <QueryClientProvider client={queryClient}>
            <HeaderContextProvider>
                <RouterProvider router={router} />
            </HeaderContextProvider>
        </QueryClientProvider>
    );
}

export default App;
