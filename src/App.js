import React, {useEffect} from 'react';
import './styles/styles.css'
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {useActions} from "./hooks/useActions";

const App = () => {
    const {setIsAuth} = useActions()

    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setIsAuth(true)
        }
    }, [])

    return (
        <>
            <Header/>
            <div className='main'>
                <AppRouter/>
            </div>
            <Footer/>
        </>
    );
};

export default App;