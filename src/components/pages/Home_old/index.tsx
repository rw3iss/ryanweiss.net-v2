import { h, render, Component } from 'preact';
import { Link } from 'preact-router/match';
import Item from '../../shared/Item';
import './style.scss';

var db = require('../../../data/db');

export default class Home extends Component {

    state = {
        items: []
    }

    componentWillMount() {
        var items = db.getLatest();
        this.setState({ items });
    }

    scrollTo(targetId) {
        var target = document.getElementById(targetId);
        // Velocity(target, "scroll", {
        //     duration: 500,
        //     container: document.getElementById('app-container'),
        //     easing: "easeInBack"
        // });
    }

    render() {
        return (
            <div className="page" id="home">
                <h1>Hello, World</h1>

                <div className="bio flex-row flex-wrap">

                    <div className="left flex-row flex-nowrap">
                        <div className="col image">
                            <img src="/img/profile.png" width="180" height="200" />
                        </div>
                        <div className="col me fill">
                            <h3>I'm</h3>
                            <ul>
                                <li>Ryan Weiss</li>
                                <li>34yrs of age, 150lbs, 5'10"</li>
                                <li><b>Web Developer</b>: Since 1998 (20+ years)</li>
                                <li><b>Musician</b>: Since 1998 (20+ years)</li>
                            </ul>

                            <h3>Links</h3>
                            <ul>
                                <li><a target="_blank" href="/files/resume.pdf">Resume</a></li>
                                <li><Link href="/play">Demos</Link></li>
                                <li><a target="_blank" href="http://github.com/rw3iss">Github</a></li>
                                <li><a href="mailto:rw3iss@gmail.com">rw3iss@gmail.com</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="right">
                        <div className="section" id="skills">
                            <h3>Skills</h3>
                            <div className="skill-types">
                                <h4>Frontend (<a target="_blank" href="/files/resume.pdf">full list</a>)</h4>
                                <ul>
                                    <li>JavaScript, React.js, Angular.js, Preact, Vue.js, Backbone.js, Mithril.js, Offline apps, service workers,  Marko, ember.js, Knockout.js, HTML5, CSS3, SASS, CSS Flexbox and Grid, Canvas, WebGL, websockets, PWA's and service workers, jQuery, Bootstrap, CoffeeScript, Handlebars, OAuth, Webpack, gulp, grunt, <a target="_blank" href="/files/resume.pdf">more</a></li>
                                </ul>

                                <h4>Backend (<a target="_blank" href="/files/resume.pdf">full list</a>)</h4>
                                <ul>
                                    <li>node.js, Express.js, PHP, ASP.NET, C#, Python, Java, Kotlin, Laravel, CodeIgniter, DialogFlow, ExpressionEngine, Drupal, Wordpress, Directus, MySQL, PostgreSQL, websockets, MongoDB, e-commerce, Git, SSL, nginx, Apache, redis, OAuth, AWS, MVC, CQRS, message queues, continuous integration, unit testing, <a target="_blank" href="/files/resume.pdf">more</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="line-title" id="fulltime"><h3>Latest</h3><h4>(updated September 2020)</h4></div>
                <div className="items flex-row flex-wrap">
                    {this.state.items.map(function (item, i) {
                        return <Item item={item} key={i} />
                    })}
                </div>

                <h5><a onClick={() => this.scrollTo('home')} href="#">Back to Top</a></h5>

                <h3 className="see-more">See more <Link href="/work">Work</Link> or <Link href="/play">Play</Link> ...</h3>
            </div>
        );
    }

}