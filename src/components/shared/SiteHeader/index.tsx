import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import './style.scss';

export default class SiteHeader extends Component {

    render() {
        return (
            <nav id="site-header">
                <div class="wrap">
                    <div class="nav-items flex-row flex-center flex-spread">
                        <Link href="/">Home</Link>
                        <Link href="/work">Work</Link>
                        <Link href="/play">Play</Link>
                        <Link href="/info">Info</Link>
                    </div>
                </div>
            </nav>
        )
    }

}