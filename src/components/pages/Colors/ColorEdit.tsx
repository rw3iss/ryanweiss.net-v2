import { useCallback, useState } from 'preact/hooks';
import VanillaPicker from 'vanilla-picker'; // A simple, framework-agnostic color picker

const ColorEdit = ({ color, onChange }) => {
    const [showPicker, setShowPicker] = useState(false);
    const pickerRef = useRef(null);

    const handleColorChange = useCallback((newColor) => {
        onChange(newColor);
        setShowPicker(false);
    }, [onChange]);

    const handleClick = useCallback(() => {
        if (!showPicker) {
            if (!pickerRef.current) {
                pickerRef.current = new VanillaPicker({
                    parent: document.body,
                    color: color.modifiedColor,
                    onChange: handleColorChange,
                    popup: 'left'
                });
            }
            pickerRef.current.open();
            setShowPicker(true);
        } else {
            pickerRef.current.close();
            setShowPicker(false);
        }
    }, [color, handleColorChange, showPicker]);

    return (
        <div style={{ backgroundColor: color.modifiedColor, height: 'auto', minHeight: '20px', flex: 1 }} onClick={handleClick}>
        </div>
    );
};

export default ColorEdit;