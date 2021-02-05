import { h, Component } from 'preact';
import SiteHeader from './shared/SiteHeader';
import Routes from './Routes';

// global styles
import './style.scss';

export default class App extends Component {

    render() {
        return (
            <div id="app">
                
                <div class="content-wrapper">
                        
                    <Routes />

                </div>

            </div>
        );
    }

}