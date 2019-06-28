import {createBrowserHistory} from 'history';

const history = createBrowserHistory();
const prevHistoryPush = history.push;
let lastLocation = history.location;

history.listen(location => {
	lastLocation = location;
});
history.push = (pathname, state = {}) => {
	if (
		lastLocation === null ||
		pathname !==
		lastLocation.pathname + lastLocation.search + lastLocation.hash ||
		JSON.stringify(state) !== JSON.stringify(lastLocation.state)
	) {
		prevHistoryPush(pathname, state);
	}
};

export default history;