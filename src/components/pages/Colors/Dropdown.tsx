import { h, FunctionalComponent, Ref } from 'preact';
import { useState, useCallback, useRef, useEffect } from 'preact/hooks';

interface DropdownProps {
    children: h.JSX.Element;
}

export const Dropdown: FunctionalComponent<DropdownProps> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const hoverTimeout = useRef<number | null>(null);

    const handleToggle = useCallback(() => {
        setIsOpen(!isOpen);
    }, [isOpen]);

    const handleMouseEnter = useCallback(() => {
        if (hoverTimeout.current !== null) {
            clearTimeout(hoverTimeout.current);
            hoverTimeout.current = null;
        }
    }, []);

    const handleMouseLeave = useCallback(() => {
        hoverTimeout.current = window.setTimeout(() => {
            setIsOpen(false);
        }, 500);
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