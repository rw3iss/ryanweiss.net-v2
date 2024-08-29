import DataService from 'lib/DataService';
import { useEffect } from 'react';
import { renderDate } from 'lib/utils/DateUtils';
import './style.scss';
import { useEntries } from 'lib/DataProvider';

const Other = (props) => {

    const entries = useEntries('other');
    //console.log(`other context data`, entries);

    return (
        <div className="page" id="other">

            <h1>Other</h1>

            <div className="entries">

                {entries && entries.map(e => <div key={e.id} className="entry">
                    <div className="title">{e.title}</div>
                    <div className="date">{renderDate(e.dateAdded)}</div>
                    <div className="content">{e.content}</div>
                </div>)}

            </div>
        </div>
    );
};

export default Other;