import { useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import coinSfx from 'public/sounds/cool-click.wav';
import clickSfx from 'public/sounds/click.wav';
import noticeSfx from 'public/sounds/select.wav';
import './style.scss';
import { useState } from 'react';

const Menu = (props) => {
    const navigate = useNavigate();
    const [playClickSound] = useSound(coinSfx);
    const [playHoverSound] = useSound(clickSfx);
    const [selected, setSelected] = useState(undefined);

    const onNavClick = (route) => {
        playClickSound();
        setSelected(route);
        navigate(route);
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
            <ul className="menu-content">
                {menuItem('/work', 'Work')}
                {menuItem('/play', 'Play')}
                {menuItem('/info', 'Info')}
            </ul>
        </div>
    );
};

export default Menu;