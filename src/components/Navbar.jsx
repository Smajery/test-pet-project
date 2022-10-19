import React from 'react';
import {useNavigate} from "react-router-dom";
import {HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE, POSTS_PAGE_ROUTE, TODOS_PAGE_ROUTE} from "../utils/consts";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";

const Navbar = () => {
    const navigate = useNavigate()
    const {logOut} = useActions()
    const isAuth = useSelector(state => state.AuthReducer.isAuth)

    return (
        <div className='navbar'>
            <ul className='navbar__content'>
                <li onClick={() => navigate(HOME_PAGE_ROUTE)}>Домой</li>
                <li onClick={() => navigate(isAuth ? POSTS_PAGE_ROUTE : LOGIN_PAGE_ROUTE)}>Посты</li>
                <li onClick={() => navigate(isAuth ? TODOS_PAGE_ROUTE : LOGIN_PAGE_ROUTE)}>Список дел</li>
                {isAuth
                    ?
                    <li onClick={() => logOut()}>Выйти</li>

                    :
                    <li onClick={() => navigate(LOGIN_PAGE_ROUTE)}>Логин</li>
                }
            </ul>
        </div>
    );
};

export default Navbar;