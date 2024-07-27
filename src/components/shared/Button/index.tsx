import { h, render, Component } from 'preact';
import './style.scss'

interface IProps {
    click?: (e: any) => void;
}

export default class Button extends Component<IProps, any> {

    constructor(props) {
        super(props);
        this.state = {
            label: "A"
        }
    }

    render(props) {
        return <div className="button" onClick={props.click ? props.click : () => null}>{...props.children}</div>
    }
}