const fetchData = async () => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params: {
			apikey: 'f1b0b3d1',
			i: 'tt0848228'
		}
	});

	console.log(response.data);
};

fetchData();
