import { useState } from 'preact/hooks';
import { playSound } from 'lib/AudioManager.js';
import './style.scss';

const Menu = (props) => {
    const [selected, setSelected] = useState(undefined);

    const onNavClick = (route) => {
        playSound('click')
        setSelected(route);
        //navigate(route);
    };

    const menuItem = (route, label) => (
        <li
            className={`${(selected == route ? ' selected' : '')}`}
            onMouseEnter={(e) => playSound('hover')}
            onClick={(e) => { onNavClick(route) }}>
            {label}
        </li>
    );

    return (
        <div className="menu">
            <div className="menu-wrapper">
                <div className="glow">
                </div>
                <ul className="menu-content">
                    {menuItem('/work', 'Work')}
                    {menuItem('/play', 'Play')}
                    {menuItem('/info', 'Info')}
                </ul>
            </div>
        </div>
    );
};

export default Menu;