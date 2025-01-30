import { FunctionalComponent } from 'preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import VanillaPicker from 'vanilla-picker';

interface ColorEditProps {
    color: { color: string, modifiedColor: string };
    onChange: (newColor: string) => void;
}

const ColorEdit: FunctionalComponent<ColorEditProps> = ({ color, onChange }) => {
    const [currentColor, setCurrentColor] = useState(color.modifiedColor);
    const colorPickerRef = useRef<VanillaPicker | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (containerRef.current && !colorPickerRef.current) {
            colorPickerRef.current = new VanillaPicker({
                parent: containerRef.current,
                color: currentColor,
                popup: 'bottom',
                editor: {
                    className: 'color-picker'
                },
                editorFormat: 'rgb',
                onChange: (color: { rgbaString: string }) => {
                    setCurrentColor(color.rgbaString);
                },
                // Remove onDone since changes are not immediately applied
                onShow: () => {
                    adjustPosition();
                }
            });
        }

        // Cleanup function to destroy the picker when component unmounts
        return () => {
            if (colorPickerRef.current) {
                colorPickerRef.current.destroy();
            }
        };
    }, [currentColor]); // Re-initialize if color changes

    const adjustPosition = useCallback(() => {
        if (colorPickerRef.current?.popup) {
            const { popup } = colorPickerRef.current;
            const rect = containerRef.current!.getBoundingClientRect();
            const popupRect = popup.getBoundingClientRect();
            const { innerWidth, innerHeight } = window;

            let left = rect.left;
            let top = rect.bottom;

            if (left + popupRect.width > innerWidth) left = Math.max(0, innerWidth - popupRect.width);
            if (top + popupRect.height > innerHeight) top = innerHeight - popupRect.height;
            if (left < 0) left = 0;
            if (top < 0) top = 0;

            popup.style.left = `${left}px`;
            popup.style.top = `${top}px`;
            popup.style.position = 'fixed';
            popup.style.display = 'block';
        }
    }, []);

    const handleClick = useCallback(() => {
        if (colorPickerRef.current) {
            colorPickerRef.current.show();
        }
    }, []);

    return (
        <div
            ref={containerRef}
            className="color-swatch ColorEdit"
            style={{ backgroundColor: currentColor }}
            onClick={handleClick}
        >
        </div>
    );
};

export default ColorEdit;