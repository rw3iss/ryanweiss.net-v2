import './style.scss';
import { useEffect } from 'preact/hooks';
import { EnhancedJsonView } from '../../shared/JsonView/EnhancedJsonView';

const data = {
	'updated': new Date().toLocaleDateString(),
	'Home': {
		'Featured': {
			'Look at this': {
				image: 'https://auction-site-staging-storage.s3.us-east-2.amazonaws.com/products/72583/Screenshot20250904144307.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVN3I3QVJQ2HWDYQY%2F20251003%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20251003T025804Z&X-Amz-Expires=86400&X-Amz-Signature=a34a323c62b6b7b320aa5272b052bfe845a46a426e93356d855d4acb649f4f68&X-Amz-SignedHeaders=host'
			},
		},
		'Contact': {
			'Email': 'rw3iss@gmail.com'
		}
	},

	'Work': {
		'Latest': {
			'Project Label': {
				date: new Date()
			}
		},
	}
}

const HomePage = (props) => {

	// const jsonWrapper = createRef(undefined);

	// useEffect(() => {
	// 	if (jsonWrapper.current) {
	// 		const jsonView = new JsonView(data, jsonWrapper.current as HTMLElement, {
	// 			expandObjs: [/children/, /children\/(.*)/, /entry/]
	// 		});
	// 	}
	// }, [jsonWrapper.current])

	return (
		<div className="page" id="home">

			<div className="json-wrapper" ref={dom => {
				if (dom) {
					console.log(`new json view`)
					const jsonView = new EnhancedJsonView(data, dom, {
						expandObjs: [/children/, /children\/(.*)/, /entry/, 'Home']
					});
					return () => { } // unmounted, cleanup?
				}
			}} />

			{/* <EntryList entries={entries} /> */}

		</div>
	);
};

export default HomePage;