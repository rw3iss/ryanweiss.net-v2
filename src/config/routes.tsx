import EntryPage from 'components/pages/Entry';
import HomePage from 'components/pages/Home';
import InfoPage from 'components/pages/Info';
import NotFoundPage from 'components/pages/NotFound';
import OtherPage from 'components/pages/Other/index';
import PlayPage from 'components/pages/Play';
import TimelinePage from 'components/pages/Timeline/index';
import WorkPage from 'components/pages/Work';

export default {
    "/": (p?) => <HomePage />,
    "/work": (p?) => <WorkPage />,
    "/play": (p?) => <PlayPage />,
    "/info": (p?) => <InfoPage />,
    "/editor": (p?) => <OtherPage />,
    "/timeline": (p?) => <TimelinePage />,
    "/entries/:slug": (p?) => <EntryPage />,
    "*": (p?) => <NotFoundPage />
}