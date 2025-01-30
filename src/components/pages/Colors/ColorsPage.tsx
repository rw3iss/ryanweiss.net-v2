import { useState } from 'preact/hooks';
import InputColumn from './InputColumn';

const ColorsPage = () => {
    const [colors, setColors] = useState([]);

    const handleColorsParsed = (parsedColors) => {
        setColors(parsedColors);
    };

    return (
        <div class="page" id="colors" style={{ display: 'flex', width: '100vw', height: '100vh' }}>
            <InputColumn onColorsParsed={handleColorsParsed} />
            {/* <ColorEditColumn colors={colors} />
            <OutputColumn colors={colors} /> */}
        </div>
    );
};

export default ColorsPage;