import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import ContactsPage from './pages/Contacts/ContactsPage';
import UsersPage from './pages/Users/UsersPage';
import ProtectedRoutes from './components/ProtectedRoutes/ProtectedRoutes';
import ProfilePage from './pages/Profile/ProfilePage';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/about", element: <AboutPage /> },
            { path: "/contacts", element: <ContactsPage /> },
            { path: "/", element: <ProtectedRoutes isAdmin={false} />, children: [
                { path: "/profile", element: <ProfilePage /> }
            ]},
            { path: "/admin", element: <ProtectedRoutes isAdmin={true} />, children: [
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
