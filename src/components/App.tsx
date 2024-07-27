import { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SiteHeader from './shared/SiteHeader';
import Routes from './Routes';

// global styles
import './style.scss';

export default class App extends Component {

    render() {
        return (
            <Router>
                <div id="app">

                    <div className="content-wrapper">

                        <Routes />

                    </div>

                </div>
            </Router>
        );
    }

}