///import { renderContentByType } from 'lib/utils/ContentUtils';
import { renderDate } from 'lib/utils/DateUtils';
import Link from '../Link/Link.js';

const EntryList = ({ entries }) => {


    return (
        <div className="entry-list">
            <div className="entries">

                {entries?.length && entries.map(e => {
                    return <Link key={e.id} className="entry" to={`/entries/${e.slug}`}>
                        <div className="date">{renderDate(e.dateAdded || e.dateUpdated)}</div>
                        <div className="title">{e.title}</div>
                        <div className="content">
                            {JSON.stringify(e.content)}
                            {/* {renderContentByType(e.contentType, e.content, { shorten: true })} */}
                        </div>
                    </Link>
                })}

            </div>
        </div>
    )

}

export default EntryList;