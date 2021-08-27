import React from 'react';
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';

const App = () => {
    return (
        <div>
            <Header/>
            <Dashboard/>
            <Footer/>
        </div>
    );
};

export default App;
