import ColorEdit from './ColorEdit';

const ColorEditColumn = ({ colors }) => (
    <div style={{ flex: '1 1 33%', display: 'flex', flexDirection: 'column' }}>
        {colors.map((color, index) => (
            <ColorEdit key={index} color={color} onChange={(newColor) => {
                const newColors = [...colors];
                newColors[index].modifiedColor = newColor;
                // Here, ideally, you would set state in the parent component
                // For simplicity, this example assumes direct state update
            }} />
        ))}
    </div>
);

export default ColorEditColumn;