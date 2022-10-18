import React from 'react';
import './styles/styles.css'
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
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