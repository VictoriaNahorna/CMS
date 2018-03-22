export default {
	render: function(data) {
		var body = document.getElementsByClassName('general')[0];
		data.map(el => {
			let div = document.createElement('div'),
				h3 = document.createElement('h3'),
				p = document.createElement('p');
			h3.innerHTML = el.title;
			p.innerHTML = el.body;
			div.appendChild(h3);
			div.appendChild(p);
			let classes = ['message', 'error', 'success', 'warning'];
			let rand = Math.floor(Math.random() * classes.length);
			div.classList.add(classes[rand]);
			return div;
		}).forEach(function(el){
				body.appendChild(el);
		})

}
}