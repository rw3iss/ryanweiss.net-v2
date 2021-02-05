import { h, Component } from 'preact';
import { createHashHistory } from 'history';
import Router from 'preact-router';
import Home from './pages/Home';
import Work from './pages/Work';
import Work2 from './pages/Work2';
import Play from './pages/Play';
import Info from './pages/Info';

export default class Routes extends Component {
    render() {
        return (
            <Router history={createHashHistory()}>
                <Home path="/" />
                <Work path="work" />
                <Work2 path="work2" />
                <Play path="play" />
                <Info path="info" />
            </Router>
        )
    }
}