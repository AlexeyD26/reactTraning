import About from "../pages/About";
import NotFoundPage from "../pages/NotFoundPage";
import PostIdPage from "../pages/PostIdPage";
import { Posts } from "../pages/Post";
import Login from "../pages/Login";


export const privateRoutes = [
    {
        path: '/about',
        component: About,
        exact: true
    },
    {
        path: '*',
        component: NotFoundPage,
        exact: true
    },
    {
        path: '/posts/:id',
        component: PostIdPage,
        exact: true
    },
    {
        path: '/posts',
        component: Posts,
        exact: true
    }
]


export const publicRoutes = [
    {
        path: '/login',
        component: Login,
        exact: true
    },
]