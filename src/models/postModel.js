let store = {
	data: [],
	init: function(url = 'https://jsonplaceholder.typicode.com/posts'){
		return fetch(url)
		.then((r) => r.json())
		.then(json => store.data = json);
	}
}
export default store;