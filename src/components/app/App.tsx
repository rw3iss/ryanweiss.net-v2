import { RouteContext } from '../shared/RouteContext/RouteContext';
import "./App.scss";

const App = (props) => {

    return (
        <main id="app">

            <div className="content-wrapper">

                {/* <div className="nav">

                    <div className="logo" onMouseEnter={e => playSound('click')}>
                        <div className="name">Ryan<br />Weiss</div>
                        <div className="title">Developer</div>
                        <div className="star">✨</div>
                    </div>

                    <Menu />

                    <div className="trees">
                        <img className="tree tree1" src="/public/images/trees/tree1.png" />
                        <img className="tree tree2" src="/public/images/trees/tree2.png" />
                        <img className="tree tree3" src="/public/images/trees/tree3.png" />
                        <img className="tree tree4" src="/public/images/trees/tree4.png" />
                        <img className="tree tree5" src="/public/images/trees/tree5.png" />
                    </div>

                </div> */}

                <div className="page">

                    { /* Todo: need App data cache context... site is loaded until cache and data are ready */}

                    <div className="container">

                        {/* <UnderConstruction /> */}

                        <div className="stage">
                            <div className="stage-content">

                                <RouteContext />

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </main>

    );

}

export default App;