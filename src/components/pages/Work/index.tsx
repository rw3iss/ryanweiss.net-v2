import { useState } from 'preact/hooks';
//import { useEntries } from 'lib/DataProvider';
import EntryList from 'components/shared/EntryList';
import './style.scss';
import { playSound } from 'lib/AudioManager.js';

const WorkPage = (props) => {
    const [filters, setFilters] = useState([]);

    const entries = []; // useEntries();//{ tags: ['tag'] });

    const clickSubnav = (f) => {
        playSound('click')
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
                    onMouseEnter={(e) => playSound('hover')}
                    onClick={e => clickSubnav('freelance')} className={isFiltered('freelance') ? ' on' : ''}>Freelance</a>
                <a href="#fulltime"
                    onMouseEnter={(e) => playSound('hover')}
                    onClick={e => clickSubnav('fulltime')} className={isFiltered('fulltime') ? ' on' : ''}>Fulltime</a>
            </div>

            <EntryList entries={entries} />

        </div>
    );
}

export default WorkPage;