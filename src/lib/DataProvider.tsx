import { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";
import DataService from "./DataService";
import IDB from "./cache/IDB";

export interface DataContextType {
    loading: boolean;
    entries: Array<any> | null;
    //setUser: (user: User | null) => void;
}

export const DataContext = createContext<DataContextType | undefined>(undefined);

// register data stores before opening db.
const dataService = new DataService();

export const DataProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<DataContextType | null>({ entries: null, loading: true });
    //console.log(`DataProvider get Data`, data);

    useLayoutEffect(() => {
        const getData = async () => {
            const entries: Array<any> = await dataService.getEntries();
            setData({ entries, loading: false });
        }

        async function initDb() {
            if (!IDB.isReady && !IDB.isLoading) { // when ready and not already called
                await IDB.open(process.env.IDB_NAME || 'app_db');
                getData();
            } else if (IDB.isReady && !IDB.isLoading) {
                //console.log(`db loaded.`);
            }
        }

        initDb();
    }, []);

    //if (!data) {
    //const [data, loading, error] = await useData(DataService.getEntries);
    // if (!error && !loading && appData) {
    //     setData(appData);
    // }
    // }

    return (<DataContext.Provider value={data}>
        {children}
    </DataContext.Provider>
    )
};


export const useEntries = (filter?) => {
    const context = useContext(DataContext);
    if (!context) throw new Error('useData ust be used within a DataProvider');

    let entries = context.entries;
    //console.log(`useEntries`, entries);

    if (filter) {
        // todo: filter dynamically
        if (filter.type) entries = entries.filter(e => e.type == filter.type);
        if (filter.tags) entries = entries.filter(e => {
            let tagged = false;
            if (e.tags) {
                for (const t in filter.tags) {
                    if (e.tags.includes(t)) {
                        tagged = true;
                        break;
                    }
                }
            }
            return tagged;
        });
    }

    return entries;
};

export const useEntry = (slug) => {
    const context = useContext(DataContext);
    if (!context) throw new Error('useData ust be used within a DataProvider');

    const entries = context.entries;
    //log(`useEntry`, slug, entries);

    return entries.find(e => e.slug == slug);
};
