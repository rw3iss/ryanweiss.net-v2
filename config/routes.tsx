import { PageHome } from 'components/pages/page-home/PageHome';

export const routes = {
    "/": (p?) => <PageHome />
};


// <Route path="/" element={<Home />} />
// <Route path="/work" element={<Work />} />
// <Route path="/play" element={<Play />} />
// <Route path="/info" element={<Info />} />
// <Route path="/entries/:slug" element={<Entry />} />
// <Route path="*" element={<NotFound />} />