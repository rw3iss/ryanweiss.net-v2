import EntryPage from 'components/pages/Entry';
import HomePage from 'components/pages/Home';
import InfoPage from 'components/pages/Info';
import NotFoundPage from 'components/pages/NotFound';
import OtherPage from 'components/pages/Other/index';
import PlayPage from 'components/pages/Play';
import TimelinePage from 'components/pages/Timeline/index';
import WorkPage from 'components/pages/Work';
import { ColorPage } from '../components/pages/Colors/ColorPage';
import { TreeHome } from '../components/pages/TreeHome';

export default {
	"/": (p?) => <HomePage />,
	"/work": (p?) => <WorkPage />,
	"/play": (p?) => <PlayPage />,
	"/info": (p?) => <InfoPage />,
	"/editor": (p?) => <OtherPage />,
	"/colors": (p?) => <ColorPage />,
	"/timeline": (p?) => <TimelinePage />,
	"/tree": (p?) => <TreeHome />,
	"/entries/:slug": (p?) => <EntryPage />,
	"*": (p?) => <NotFoundPage />
}