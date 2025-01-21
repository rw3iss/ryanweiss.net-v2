import { RouteContext } from '../shared/RouteContext/RouteContext';
import Menu from '../shared/Menu';
import Link from '../shared/Link/Link';
import "./App.scss";
import UnderConstruction from '../shared/UnderConstruction/index.js';
import { playSound } from 'lib/AudioManager.js';

const App = (props) => {

    return (
        <main id="app">

            <div className="content-wrapper">

                <div className="nav">

                    <div className="logo" onMouseEnter={e => playSound('click')}>
                        <div className="name">Ryan<br />Weiss</div>
                        <div className="title">Developer</div>
                        <div className="star">✨</div>
                    </div>

                    <Menu />

                    <div className="trees">
                        <img className="tree tree1" src="/images/trees/tree1.png" />
                        <img className="tree tree2" src="/images/trees/tree2.png" />
                        <img className="tree tree3" src="/images/trees/tree3.png" />
                        <img className="tree tree4" src="/images/trees/tree4.png" />
                        <img className="tree tree5" src="/images/trees/tree5.png" />
                    </div>

                </div>

                <div className="page">

                    { /* Todo: need App data cache context... site is loaded until cache and data are ready */}

                    <div className="container">

                        <UnderConstruction />

                        {/* <div className="stage">
                            <div className="stage-content">

                                <RouteContext />

                            </div>
                        </div> */}

                    </div>

                </div>

            </div>

        </main>

    );

}

export default App;