import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import FixedProducts from './pages/FixedProducts';
import { HeaderContextProvider } from './header-context';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [{ path: '', element: <FixedProducts /> }],
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
