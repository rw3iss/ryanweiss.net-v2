import { h, Component } from 'preact';
import Item from '../../shared/Item';
import { Link } from 'preact-router/match';
import './style.scss';

var db = require('../../../data/db');

export default class Play extends Component {

    state = {
        items: []
    }

    componentWillMount() {
        var items = db.getPlay();
        console.log('play', items)
        this.setState({items});
    }

    handleClick(item) {
        if(item.isOpen == true)
            item.isOpen = false;
        else 
            item.isOpen = true;
        this.forceUpdate();
    }

    render() {
        return (
            <div class="page" id="play">
                <h1>Play</h1>
               
                <div class="items flex-row flex-wrap">
                 {this.state.items.map(function(item, i) {
                    return <Item item={item} key={i} />
                  })}
                </div>

            </div>
        );
    }

}