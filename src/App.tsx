import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import FixedProducts from './pages/FixedProducts';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [{ path: '', element: <FixedProducts /> }],
    },
]);
function App() {
    return <RouterProvider router={router} />;
}

export default App;
