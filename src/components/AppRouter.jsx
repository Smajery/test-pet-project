import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import {HOME_PAGE_ROUTE, NOT_FOUND_PAGE_ROUTE} from "../utils/consts";
import {useSelector} from "react-redux";

const AppRouter = () => {
    const isAuth = useSelector(state => state.AuthReducer.isAuth)

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
                <Route path={NOT_FOUND_PAGE_ROUTE} element={<Navigate replace to={HOME_PAGE_ROUTE}/>}/>
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
                <Route path={NOT_FOUND_PAGE_ROUTE} element={<Navigate replace to={HOME_PAGE_ROUTE}/>}/>
            </Routes>
    );
};

export default AppRouter;