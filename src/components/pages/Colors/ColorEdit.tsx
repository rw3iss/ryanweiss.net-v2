import { FunctionalComponent } from 'preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';
import VanillaPicker from 'vanilla-picker';

interface ColorEditProps {
    color: { color: string, modifiedColor: string };
    onChange: (newColor: string) => void;
    hideOtherPickers: () => void;
}

export const ColorEdit: FunctionalComponent<ColorEditProps> = ({ color, onChange, hideOtherPickers }) => {
    const [currentColor, setCurrentColor] = useState(color.modifiedColor);
    const [showPopup, setShowPopup] = useState(false);
    const colorPickerRef = useRef<VanillaPicker | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const hoverTimeout = useRef<number | null>(null);

    useEffect(() => {
        if (containerRef.current && !colorPickerRef.current) {
            colorPickerRef.current = new VanillaPicker({
                parent: containerRef.current,
                color: currentColor,
                popup: 'bottom',
                editor: true,
                cancelButton: true,
                editorFormat: 'hex',
                onChange: (color: { hex: string }) => {
                    setCurrentColor(color.hex);
                },
                onDone: (color: { hex: string }) => {
                    onChange(color.hex);
                },
                onOpen: () => {
                    if (colorPickerRef.current) {
                        colorPickerRef.current.show();
                        colorPickerRef.current.hide();
                    }
                }
            });

            const handleMouseEnter = () => {
                if (hoverTimeout.current !== null) {
                    clearTimeout(hoverTimeout.current);
                    hoverTimeout.current = null;
                }
            };

            const handleMouseLeave = () => {
                hoverTimeout.current = window.setTimeout(() => {
                    setShowPopup(false);
                }, 500);
            };

            if (colorPickerRef.current) {
                containerRef.current.addEventListener('mouseenter', handleMouseEnter);
                containerRef.current.addEventListener('mouseleave', handleMouseLeave);
            }

            return () => {
                if (colorPickerRef.current) {
                    colorPickerRef.current.destroy();
                }
                if (containerRef.current) {
                    containerRef.current.removeEventListener('mouseenter', handleMouseEnter);
                    containerRef.current.removeEventListener('mouseleave', handleMouseLeave);
                }
                if (hoverTimeout.current !== null) {
                    clearTimeout(hoverTimeout.current);
                }
            };
        }
    }, [currentColor, onChange, hideOtherPickers]);

    const adjustPosition = useCallback(() => {
        if (colorPickerRef.current && colorPickerRef.current.popup) {
            const rect = containerRef.current!.getBoundingClientRect();
            const popupRect = colorPickerRef.current.popup.getBoundingClientRect();
            const { innerWidth, innerHeight } = window;

            let left = rect.left;
            let top = rect.bottom;

            if (left + popupRect.width > innerWidth) left = Math.max(0, innerWidth - popupRect.width);
            if (top + popupRect.height > innerHeight) top = innerHeight - popupRect.height;
            if (left < 0) left = 0;
            if (top < 0) top = 0;

            // Adjusting position using native JS
            colorPickerRef.current.popup.style.left = `${left}px`;
            colorPickerRef.current.popup.style.top = `${top}px`;
            colorPickerRef.current.popup.style.position = 'fixed'; // Ensure it's fixed for absolute positioning
        }
    }, []);

    useEffect(() => {
        if (colorPickerRef.current) {
            if (showPopup) {
                colorPickerRef.current.show();
                adjustPosition();
            } else {
                colorPickerRef.current.hide();
            }
        }
    }, [showPopup, adjustPosition]);

    const handleClick = useCallback((event: MouseEvent) => {
        hideOtherPickers();
        setShowPopup((prevState) => !prevState); // Toggle popup state
    }, [hideOtherPickers]);

    return (
        <div
            ref={containerRef}
            className={`ColorEdit ${showPopup ? 'show-picker' : ''}`}
        >
            <div
                className="color-swatch"
                style={{ backgroundColor: currentColor, height: '100%' }}
                onClick={handleClick}
            />
        </div>
    );
};