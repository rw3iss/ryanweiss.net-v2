import { useContext, useEffect, useState } from 'react';
import { renderDate } from 'lib/utils/DateUtils';
import { DataContext, useEntries } from 'lib/DataProvider';
import EntryList from 'components/shared/EntryList';
import coinSfx from 'public/sounds/cool-click.wav';
import clickSfx from 'public/sounds/click.wav';
import useSound from 'use-sound';
import './style.scss';

const Work = (props) => {
    const [filters, setFilters] = useState([]);
    const [playClickSound] = useSound(coinSfx);
    const [playHoverSound] = useSound(clickSfx);

    const entries = useEntries();//{ tags: ['tag'] });

    const clickSubnav = (f) => {
        playClickSound()
        toggleFilter(f);
    }

    const toggleFilter = f => {
        if (filters.includes(f)) setFilters(filters.filter(_f => _f != f));
        else setFilters([...filters, f]);
    };

    const isFiltered = f => {
        return filters.includes(f);
    };

    return (
        <div className="page" id="work">

            <h1>Work</h1>

            <div className="sub-nav">
                <a href="#freelance"
                    onMouseEnter={(e) => playHoverSound()}
                    onClick={e => clickSubnav('freelance')} className={isFiltered('freelance') ? ' on' : ''}>Freelance</a>
                <a href="#fulltime"
                    onMouseEnter={(e) => playHoverSound()}
                    onClick={e => clickSubnav('fulltime')} className={isFiltered('fulltime') ? ' on' : ''}>Fulltime</a>
            </div>

            <EntryList entries={entries} />

        </div>
    );
}

export default Work;