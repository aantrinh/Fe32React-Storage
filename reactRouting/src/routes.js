import Home from './pages/home/home';
import About from './pages/home/about';
import Listmovie from './pages/home/list-movie';
import DetailMovie from './pages/home/detail-movie';
import HOC from './HOC';
import Admin from './pages/admin/admin';
import Dashboard from './pages/admin/dashboard';
import ThemNguoiDung from './pages/admin/ThemNguoiDung';


const routesHome = [
    {
        path: "/",
        exact: true,
        component: Home
    },
    {
        path: "/about",
        exact: false,
        component: About
    },
    {
        path: "/list-movie",
        exact: false,
        component: Listmovie
    },
    {
        path: "/detail-movie/:id",
        exact: false,
        component: DetailMovie
    },
    {
        path: "/hoc",
        exact: false,
        component: HOC
    }

];

const routesAdmin =[
    {
        path: "/dashboard",
        exact: false,
        component: Dashboard
    },
    {
        path: "/ThemNguoiDung",
        exact: false,
        component: ThemNguoiDung
    }

]

export {routesHome, routesAdmin}