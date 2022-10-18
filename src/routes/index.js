import {HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE, POSTS_PAGE_ROUTE, TODOS_PAGE_ROUTE} from "../utils/consts";
import LoginPage from "../pages/LoginPage";
import PostsPage from "../pages/PostsPage";
import TodosPage from "../pages/TodosPage";
import HomePage from "../pages/HomePage";

export const publicRoutes = [
    {path: HOME_PAGE_ROUTE, component: HomePage},
    {path: LOGIN_PAGE_ROUTE, component: LoginPage},
]

export const privateRoutes = [
    {path: HOME_PAGE_ROUTE, component: HomePage},
    {path: POSTS_PAGE_ROUTE, component: PostsPage},
    {path: TODOS_PAGE_ROUTE, component: TodosPage},
]
