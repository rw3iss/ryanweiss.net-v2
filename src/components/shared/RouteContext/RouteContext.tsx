import { DEFAULT_ROUTE } from 'config/config';
import routes from 'config/routes';
import { useRouter } from 'lib/hooks/useRouter.js';
import { useEffect } from 'preact/hooks';

export function RouteContext() {

	const { route, routeParams, navigate } = useRouter();

	// tell the router to try to render the current or default route
	useEffect(() => {
		let l = location.pathname;
		if (l == '/' || l == '') l = DEFAULT_ROUTE;
		else l += location.search;
		if (!route) navigate(l);
	}, []);

	const routeFn: any = route ? routes[route] : undefined;

	if (!route) return ''; // route not given
	if (!routeFn) return 'Not found.'; // no handler found

	return routeFn(routeParams)
}
