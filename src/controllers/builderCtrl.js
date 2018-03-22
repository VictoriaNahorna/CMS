import model from '../models/info.js';
import view from '../views/engine.js';
let controller = {
	model,
	view,
	work: function() {
		let result = [],
		data = this.model.data;
		result = data.map(function(el){
			let html = document.createElement(el.tag);
			if (el.body) {
				html.innerHTML = el.body;
			}
			if (el.src) {
				html.setAttribute('src', el.src);
			}
			return html;

		} )

		this.markUp = result;
		return result;
	},
	render:function() {
		this.work();
		this.view.render(this.markUp);
	},
	markUp: []
};
export default controller;