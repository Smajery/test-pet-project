import React from 'react';
import {useActions} from "../hooks/useActions";

const LoginForm = () => {
    const {logIn} = useActions()

    return (
        <form className='login-form'>
            <input/>
            <input/>
            <button onClick={() => logIn()}>Войти</button>
        </form>

    );
};

export default LoginForm;