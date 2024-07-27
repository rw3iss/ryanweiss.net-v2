import { Component } from 'react';
import Item from '../../shared/Item';
import './style.scss';

import db from '../../../data/db';

export default class Work2 extends Component {

    state = {
        freelance: [],
        fulltime: []
    }

    componentWillMount() {
        this.setState({
            freelance: db.getFreelance(),
            fulltime: db.getFulltime()
        });
    }

    componentDidMount() {
        // var hash = this.props.location.hash.substring(1);
        // if(hash.length) {
        //     console.log(hash, hash.length)
        //     this.scrollTo(hash);
        // }
    }

    scrollTo(targetId) {
        const target = document.getElementById(targetId);
        // Velocity(target, "scroll", {
        //     duration: 500,
        //     container: document.getElementById('app-container'),
        //     easing: "easeInBack"
        // });
    }

    render() {
        console.log("render");

        return (
            <div className="page" id="work2">
                <h1>Work</h1>
                <div className="sub-nav">
                    <a onClick={() => this.scrollTo('freelance')} href="#freelance">Freelance</a>
                    <a onClick={() => this.scrollTo('fulltime')} href="#fulltime">Fulltime</a>
                </div>

                <div className="line-title" id="freelance"><h3>Freelance</h3></div>
                <div className="items flex-row flex-wrap">
                    {this.state.freelance.map(function (item, i) {
                        return <Item item={item} key={i} />
                    })}
                </div>

                <div className="line-title" id="fulltime"><h3>Fulltime</h3>
                    <h5><a onClick={() => this.scrollTo('work')} href="#" className="to-top">Back to Top</a></h5>
                </div>
                <div className="items flex-row flex-wrap">
                    {this.state.fulltime.map(function (item, i) {
                        return <Item item={item} key={i} />
                    })}
                </div>
            </div>
        );
    }

}