import EntryList from 'components/shared/EntryList';
import { useEntries } from 'lib/DataProvider';
import './style.scss';

const Home = (props) => {

    const entries = useEntries();

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