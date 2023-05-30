import { Outlet } from 'react-router-dom';
import Header from '../components/Navigation/Header';

export default function Layout() {
    return (
        <div className="page">
            <Header />
            <Outlet />
        </div>
    );
}