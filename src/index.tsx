import { h, render } from 'preact';
import App from './components/App';

let app = document.getElementById('app');

if (app) {
    render(<App />, app, app);
}