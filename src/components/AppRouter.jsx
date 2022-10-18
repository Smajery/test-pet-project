import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {NOT_FOUND_PAGE_ROUTE} from "../utils/consts";
import NotFoundPage from "../pages/NotFoundPage";

const AppRouter = () => {
    const [isAuth, setIsAuth] = useState(true)

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component/>}
                    />
                )}
                <Route path={NOT_FOUND_PAGE_ROUTE} element={<NotFoundPage/>}/>
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component/>}
                    />
                )}
                <Route path={NOT_FOUND_PAGE_ROUTE} element={<NotFoundPage/>}/>
            </Routes>
    );
};

export default AppRouter;