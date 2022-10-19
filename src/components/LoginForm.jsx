import React, {useState} from 'react';
import {useActions} from "../hooks/useActions";

const LoginForm = () => {
    const {logIn} = useActions()

    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    return (
        <form className='login-form'>
            <input
                type='text'
                placeholder='Введите свой email'
                value={emailValue}
                onChange={event => setEmailValue(event.target.value)}
            />
            <input
                type='password'
                placeholder='Введите свой пароль'
                value={passwordValue}
                onChange={event => setPasswordValue(event.target.value)}
            />
            <button onClick={() => logIn()}>Войти</button>
        </form>

    );
};

export default LoginForm;