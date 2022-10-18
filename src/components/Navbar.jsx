import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {HOME_PAGE_ROUTE, LOGIN_PAGE_ROUTE, POSTS_PAGE_ROUTE, TODOS_PAGE_ROUTE} from "../utils/consts";

const Navbar = () => {
    const navigate = useNavigate()
    const [isAuth, setIsAuth] = useState(true)
    return (
        <div className='navbar'>
            <ul className='navbar__content'>
                <li onClick={() => navigate(HOME_PAGE_ROUTE)}>Домой</li>
                <li onClick={() => navigate(POSTS_PAGE_ROUTE)}>Посты</li>
                <li onClick={() => navigate(TODOS_PAGE_ROUTE)}>Список дел</li>
                {isAuth
                    ?
                    <li onClick={() => setIsAuth(false)}>Выйти</li>

                    :
                    <li onClick={() => setIsAuth(true) && navigate(LOGIN_PAGE_ROUTE)}>Войти</li>
                }
            </ul>
        </div>
    );
};

export default Navbar;