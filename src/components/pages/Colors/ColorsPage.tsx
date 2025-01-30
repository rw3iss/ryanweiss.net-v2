import { Component } from 'preact';
import ColorEditColumn from './ColorEditColumn';
import InputColumn from './InputColumn';
import OutputColumn from './OutputColumn';

import './ColorsPage.scss';

interface ColorPageProps { }

interface ColorPageState {
    colors: { color: string, modifiedColor: string }[];
}

class ColorPage extends Component<ColorPageProps, ColorPageState> {
    constructor(props: ColorPageProps) {
        super(props);
        this.state = {
            colors: []
        };
    }

    handleColorsParsed = (parsedColors: { color: string, modifiedColor: string }[]) => {
        this.setState({ colors: parsedColors });
    };

    handleColorsChanged = (newColors: { color: string, modifiedColor: string }[]) => {
        this.setState({ colors: newColors });
    };

    render() {
        return (
            <div className="ColorPage">
                <InputColumn onColorsParsed={this.handleColorsParsed} />
                <ColorEditColumn colors={this.state.colors} onColorsChanged={this.handleColorsChanged} />
                <OutputColumn colors={this.state.colors} />
            </div>
        );
    }
}

export default ColorPage;