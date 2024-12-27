import { Component } from 'react';
import db from '../../../data/db';
import './style.scss';

export default class Home extends Component {

    state = {
        items: [],
        currentId: undefined
    }

    container: any;

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

        window.history.replaceState(null, id, id);
        // this.props.history.replace({ pathname: `${id}` })

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
            "HOME"
        );
    }

}