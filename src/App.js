import React from 'react';
import './styles/styles.css'
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Header/>
            <AppRouter/>
            <Footer/>
        </>
    );
};

export default App;