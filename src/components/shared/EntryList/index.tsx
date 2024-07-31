import { renderDate } from 'lib/utils/DateUtils';
import { Link } from 'react-router-dom';

const EntryList = ({ entries }) => {

    return (
        <div className="entry-list">
            <div className="entries">

                {entries && entries.map(e => <Link key={e.id} className="entry" to={`/entry/${e.slug}`}>
                    <div className="title">{e.title}</div>
                    <div className="date">{renderDate(e.dateAdded || e.dateUpdated)}</div>
                    <div className="content">{e.content}</div>
                </Link>)}

            </div>
        </div>
    )

}

export default EntryList;