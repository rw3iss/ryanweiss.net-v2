import { useLayoutEffect, useState } from "react";
import { BrowserRouter as Router } from 'react-router-dom';

const CustomRouter = ({ history, onRouteChange, ...props }) => {
    const [state, setState] = useState({
        action: history.action,
        location: history.location
    });

    useLayoutEffect(() => history.listen((location, action) => {
        console.log(`history change`, location);
        onRouteChange(location)
    }), [history.pathname, onRouteChange]);

    return (
        <Router history={history}
            {...props}
            location={state.location}
            navigationType={state.action}
            navigator={history}
        />
    );
};

export default CustomRouter;