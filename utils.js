const debounce = (func, delay = 1000) => {
	let timeoutId;
	return (...args) => {
		// args in this instance will be the event object
		if (timeoutId) {
			clearTimeout(timeoutId);
		}
		timeoutId = setTimeout(() => {
			func.apply(null, args);
		}, delay);
	};
};
