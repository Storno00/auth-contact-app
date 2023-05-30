import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ContactsPage from './pages/Contacts/ContactsPage';
import UsersPage from './pages/Users/UsersPage';
import AdminRoutes from './components/AdminRoutes/AdminRoutes';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/contacts", element: <ContactsPage /> },
            { path: "/admin", element: <AdminRoutes />, children: [
                { path: "/admin/users", element: <UsersPage /> }
            ]},
        ]
    }
]);

export default function Routes() {
    return (
        <RouterProvider router={router} />
    );
}
