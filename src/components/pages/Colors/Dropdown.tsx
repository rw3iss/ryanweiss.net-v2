import { FunctionalComponent, h } from 'preact';
import { useCallback, useEffect, useRef, useState } from 'preact/hooks';

interface DropdownProps {
    show: boolean;
    onShow: (s) => void;
    children: h.JSX.Element;
}

export const Dropdown: FunctionalComponent<DropdownProps> = ({ show, onShow, children }) => {
    const [isOpen, setIsOpen] = useState(show || false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const hoverTimeout = useRef<number | null>(null);

    const handleToggle = useCallback(() => {
        setIsOpen(!isOpen);
        onShow(!isOpen);
    }, [isOpen]);

    const handleMouseEnter = useCallback(() => {
        if (hoverTimeout.current !== null) {
            clearTimeout(hoverTimeout.current);
            hoverTimeout.current = null;
        }
    }, []);

    useEffect(() => {
        setIsOpen(show);
    }, [show]);

    const handleMouseLeave = useCallback(() => {
        // hoverTimeout.current = window.setTimeout(() => {
        //     setIsOpen(false);
        // }, 5000);
    }, []);

    useEffect(() => {
        if (dropdownRef.current) {
            dropdownRef.current.addEventListener('mouseenter', handleMouseEnter);
            dropdownRef.current.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (dropdownRef.current) {
                dropdownRef.current.removeEventListener('mouseenter', handleMouseEnter);
                dropdownRef.current.removeEventListener('mouseleave', handleMouseLeave);
            }
            if (hoverTimeout.current !== null) {
                clearTimeout(hoverTimeout.current);
            }
        };
    }, [handleMouseEnter, handleMouseLeave]);

    return (
        <div className="dropdown-container" ref={dropdownRef}>
            <button className="dropdown-button" onClick={handleToggle}>
                <span>Config</span>
            </button>
            {isOpen && (
                <div className="dropdown-menu" style={{ position: 'absolute', top: '100%', right: 0, zIndex: 1000 }}>
                    {children}
                </div>
            )}
        </div>
    );
};