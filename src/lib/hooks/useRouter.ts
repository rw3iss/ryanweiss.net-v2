import EventService from 'lib/EventService';
import { useEffect, useState } from 'preact/hooks';

// useRoute - Binds route changes to local listeners that components can
// use to find the current route and detect route changes.
const ROUTE_CHANGE_EVENT = 'route-change';

export function useRouter() {
    const [route, setRoute] = useState(undefined);
    const [routeParams, setRouteParams] = useState(undefined);
    const [routeArgs, setRouteArgs] = useState(undefined);

    useEffect(() => {
        function handleRouteChange(e) {
            setRoute(e.target.route);
            setRouteParams(e.target.params);
            // todo: parse url args
        }

        EventService.subscribe(ROUTE_CHANGE_EVENT, handleRouteChange);
        return () => {
            EventService.unsubscribe(ROUTE_CHANGE_EVENT, handleRouteChange);
        };
    });

    const navigate = (to) => {
        console.log(`navigate`, to);
        setRoute(to);
        setRouteParams(undefined);
        setRouteArgs(undefined);
    };

    return { route, routeParams, navigate };
}
