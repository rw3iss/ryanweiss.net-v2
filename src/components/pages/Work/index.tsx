import { useContext, useEffect } from 'react';
import { renderDate } from 'lib/utils/DateUtils';
import { DataContext, useEntries } from 'lib/DataProvider';
import EntryList from 'components/shared/EntryList';
import './style.scss';

const Work = (props) => {
    const entries = useEntries({ tags: ['fulltime', 'freelance'] });

    return (
        <div className="page" id="work">

            <h1>Work</h1>

            <div className="sub-nav">
                <a href="#freelance">Freelance</a>
                <a href="#fulltime">Fulltime</a>
            </div>

            <EntryList entries={entries} />

        </div>
    );
}

export default Work;