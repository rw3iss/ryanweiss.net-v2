import { Component } from 'react';
import { Link } from 'preact-router/match';
import './style.scss';

export default class Info extends Component {

    render() {
        return (
            <div className="page" id="info">

                <h1>Info</h1>

                <div className="bio">
                    For now, I can be reached by email at <a href="mailto:rw3iss@gmail.com">rw3iss@gmail.com</a>.
                </div>

            </div>
        );
    }

};