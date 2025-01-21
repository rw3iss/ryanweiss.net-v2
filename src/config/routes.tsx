import HomePage from 'components/pages/Home';
import WorkPage from 'components/pages/Work';
import PlayPage from 'components/pages/Play';
import InfoPage from 'components/pages/Info';
import EntryPage from 'components/pages/Entry';
import NotFoundPage from 'components/pages/NotFound';

console.log(`RRR`, HomePage);

export const routes = {
    "/": (p?) => <HomePage />,
    "/work": (p?) => <WorkPage />,
    "/play": (p?) => <PlayPage />,
    "/info": (p?) => <InfoPage />,
    "/entries/:slug": (p?) => <EntryPage />,
    "*": (p?) => <NotFoundPage />
};
export const DEFAULT_ROUTE = "/roast";