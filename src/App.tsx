import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import FixedProducts from './pages/FixedProducts';
import { HeaderContextProvider } from './header-context';
import Products from './pages/Products';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { path: '', element: <FixedProducts /> },
            { path: 'product', element: <Products /> },
        ],
    },
]);
function App() {
    return (
        <HeaderContextProvider>
            <RouterProvider router={router} />
        </HeaderContextProvider>
    );
}

export default App;
