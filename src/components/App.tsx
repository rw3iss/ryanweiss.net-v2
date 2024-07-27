import { Component, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SiteHeader from './shared/SiteHeader';
import Routes from './Routes';

// global styles
import './style.scss';
import useData from 'app/lib/useData';
import DataService from 'app/lib/DataService';

const App = (props) => {
    const [data, loading, error] = useData(DataService.getData);
    console.log(`data`, data);

    useEffect(() => {
        console.log(`get App data`);
    }, [data])

    return (
        <Router>
            <div id="app">

                <div className="content-wrapper">

                    {loading ? "LOADING" :

                        <Routes />
                    }

                </div>

            </div>
        </Router>
    );

}

export default App;