import { Component } from 'react';
import './style.scss';
import db from '../../../data/db';

export default class Home extends Component {

    state = {
        items: []
    }

    componentWillMount() {
        const items = db.getLatest();
        this.setState({
            items,
            currentId: undefined
        });
    }

    componentDidMount() {
        this.container = document.querySelector("#home .container");

        setTimeout(() => {
            this.container.classList.add('page-loaded');
        }, 150);
    }

    onNavClick(e, path) {
        const self = this;
        const id = path.replaceAll('/', '');
        const items = document.querySelectorAll('.menu li');

        Array.from(items)
            .filter(i => i.children[0] != e.target)
            .forEach(i => i.classList.remove('clicked'))

        e.target.parentNode.classList.add('clicked');
        this.container.classList.add('navigating');

        setTimeout(() => self.loadContent(id), 100);
    }

    loadContent(id) {
        const self = this;
        console.log('load content', id);
        this.setState({
            currentId: id
        });

        if (id != this.state.currentId) {
            // fade stage in
            this.container.classList.add('show-stage');
            this.container.classList.add('loading');

            // load new content

            setTimeout(() => {
                self.container.classList.remove('loading');
            }, 500);
        } else {
            // scroll to top
        }

        // to
    }

    render() {
        return (
            <div className="page" id="home">

                <div className="logo">RYAN</div>

                <div className="container">

                    <div className="menu">
                        <ul className="menu-content">
                            <li onClick={(e) => { this.onNavClick(e, '/about') }}><span>About</span></li>
                            <li onClick={(e) => { this.onNavClick(e, '/portfolio') }}><span>Portfolio</span></li>
                            <li onClick={(e) => { this.onNavClick(e, '/projects') }}><span>Other Projects</span></li>
                            <li onClick={(e) => { this.onNavClick(e, '/contact') }}><span>Contact</span></li>
                        </ul>
                    </div>

                    <div className="stage">
                        <div className="stage-content">

                            <div className="loader">
                                <div className="loader-ring">
                                    <div></div><div></div><div></div><div></div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        );
    }

}