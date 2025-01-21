import { renderContentByType } from 'lib/ContentUtils';
import { useEntry } from 'lib/DataProvider';
import { renderDate } from 'lib/utils/DateUtils';
import './style.scss';

const Entry = (props) => {
    const params = useParams();
    const entry = useEntry(params.slug);

    // useLayoutEffect(() => {
    //     if (params?.slug) {
    //         console.log(`get entry`, params.slug)
    //         const _entry = await DataService.getEntryBySlug(params.slug);
    //         if (!_entry) return navigate("/not-found");
    //         setEntry(_entry);
    //     }
    // }, [params]);
    // const entries = useEntries();
    // console.log(`home context data`, entries);

    // useEffect(() => {
    //     if (data) console.log(`got App data home`, data);
    // }, [data])

    return (
        <div className="page" id="entry">
            {entry &&
                <div key={entry.id} className="entry">
                    <div className="date">{renderDate(entry.dateAdded || entry.dateUpdated)}</div>
                    <div className="title">{entry.title}</div>
                    <div className="content">
                        {renderContentByType(entry.contentType, entry.content)}
                    </div>
                </div>
            }
        </div>
    );
};

export default Entry;