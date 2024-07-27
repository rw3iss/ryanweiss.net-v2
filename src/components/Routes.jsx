import { Route, Routes } from 'react-router-dom';
import Home from 'components/pages/Home';
import Work from 'components/pages/Work';
import Play from 'components/pages/Play';
import Info from 'components/pages/Info';

const routes = (props) => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/play" element={<Play />} />
            <Route path="/info" element={<Info />} />
        </Routes>
    );
}

export default routes;