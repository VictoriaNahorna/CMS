import model from '../models/postModel.js';
import view from '../views/engine.js';

let controller = {
    model,
    view,
    work: function() {
        let result = [];
        return this.model.init().then((a)=>{
            let data = this.model.data;
            this.markUp = data;
        });
    },
    render: function() {
        this.work().then(()=> {
        this.view.render(this.markUp);
        });
    },
    markUp: []
};

export default controller;