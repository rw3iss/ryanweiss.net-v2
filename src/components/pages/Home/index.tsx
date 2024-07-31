import { useContext, useEffect } from 'react';
import { renderDate } from 'lib/utils/DateUtils';
import { DataContext, useEntries } from 'lib/DataProvider';
import EntryList from 'components/shared/EntryList';
import './style.scss';

const Home = (props) => {

    const entries = useEntries();
    console.log(`home context data`, entries);

    // useEffect(() => {
    //     if (data) console.log(`got App data home`, data);
    // }, [data])

    return (
        <div className="page" id="home">
            <EntryList entries={entries} />
        </div>
    );
};

export default Home;