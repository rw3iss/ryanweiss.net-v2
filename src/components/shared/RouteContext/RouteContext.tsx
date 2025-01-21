import { DEFAULT_ROUTE, routes } from 'config/routes';
import { useRouter } from 'lib/hooks/useRouter.js';
import { router } from 'lib/Router';
import { useEffect } from 'preact/hooks';

export function RouteContext() {

    const { route, routeParams, navigate } = useRouter();

    // tell the router to try to load the initial url
    useEffect(() => {
        if (!route) navigate(DEFAULT_ROUTE || location.pathname);
    }, []);

    return (
        route ? (
            typeof routes[route] != 'undefined' ? routes[route](routeParams) : "Not found.") : ''
    )
}