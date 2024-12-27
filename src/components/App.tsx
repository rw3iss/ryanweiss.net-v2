import { BrowserRouter, Link } from "react-router-dom";
import { DataContext, DataProvider } from '../lib/DataProvider';
import Routes from './Routes';
import Menu from './shared/Menu';

// global styles
import './style.scss';

const App = (props) => {

    return (
        <BrowserRouter>

            <div id="app">

                <DataProvider>

                    <DataContext.Consumer>
                        {data =>

                            <div className="content-wrapper">

                                <div className="nav">

                                    <Link to="/" className="logo">
                                        <div className="name">Ryan<br />Weiss</div>
                                        <div className="title">Developer</div>
                                        <div className="star">✨</div>
                                    </Link>

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

                                        <div className="stage">
                                            <div className="stage-content">

                                                {data?.loading ? <div className="loader">
                                                    <div className="loader-ring">
                                                        LOADING
                                                        <div></div><div></div><div></div><div></div>
                                                    </div>
                                                </div> :

                                                    <Routes />
                                                }

                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                        }
                    </DataContext.Consumer>

                </DataProvider>

            </div>

        </BrowserRouter>
    );

}

export default App;