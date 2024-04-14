import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import RootLayout from './pages/Root';
import FixedProducts from './pages/FixedProducts';
import { HeaderContextProvider } from './header-context';
import Products from './pages/Products';
import ProductCategory from './pages/ProductCategory';
import addCategories, { addCategoryDetails } from './util/category';
import addProducts from './util/products';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '/', element: <FixedProducts /> },
            { path: '/product', element: <Products /> },
            { path: '/product/:productCategory', element: <ProductCategory /> },
        ],
    },
]);
function App() {
    useEffect(() => {
        addCategories();
        addCategoryDetails();
        addProducts();
    }, []);

    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <HeaderContextProvider>
                <RouterProvider router={router} />
            </HeaderContextProvider>
        </QueryClientProvider>
    );
}

export default App;
