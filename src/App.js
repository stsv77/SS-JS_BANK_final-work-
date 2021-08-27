import React from 'react';
import {presetGpnDefault, Theme} from '@consta/uikit/Theme';
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';

const App = () => {
    return (
        <Theme preset={presetGpnDefault}>
            <div>
                <Header/>
                <Dashboard/>
                <Footer/>
            </div>
        </Theme>
    );
};

export default App;
