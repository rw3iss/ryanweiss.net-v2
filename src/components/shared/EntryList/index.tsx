import { renderContentByType } from 'lib/ContentUtils';
import { renderDate } from 'lib/utils/DateUtils';
import { Link } from 'react-router-dom';

const EntryList = ({ entries }) => {


    return (
        <div className="entry-list">
            <div className="entries">

                {entries && entries.map(e => <Link key={e.id} className="entry" to={`/entries/${e.slug}`}>
                    <div className="date">{renderDate(e.dateAdded || e.dateUpdated)}</div>
                    <div className="title">{e.title}</div>
                    <div className="content">
                        {renderContentByType(e.contentType, e.content, { shorten: true })}
                    </div>
                </Link>)}

            </div>
        </div>
    )

}

export default EntryList;