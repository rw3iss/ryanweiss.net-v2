import { useState } from 'preact/hooks';
import clickSfx from 'public/sounds/click.wav';
import coinSfx from 'public/sounds/cool-click.wav';
import useSound from 'use-sound';
import './style.scss';

const Menu = (props) => {
    const [playClickSound] = useSound(coinSfx);
    const [playHoverSound] = useSound(clickSfx);
    const [selected, setSelected] = useState(undefined);

    const onNavClick = (route) => {
        playClickSound();
        setSelected(route);
        //navigate(route);
    };

    const menuItem = (route, label) => (
        <li
            className={`${(selected == route ? ' selected' : '')}`}
            onMouseEnter={(e) => playHoverSound()}
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