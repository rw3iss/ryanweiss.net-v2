import { useContext, useEffect } from 'react';
import { renderDate } from 'lib/utils/DateUtils';
import { DataContext, useEntries } from 'lib/DataProvider';
import EntryList from 'components/shared/EntryList';
import './style.scss';

const Play = (props) => {

    const entries = useEntries();
    //console.log(`play context data`, entries);

    return (
        <div className="page" id="play">

            <h1>Play</h1>

            <EntryList entries={entries} />

        </div>
    );
}

export default Play;