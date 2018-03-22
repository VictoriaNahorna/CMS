import Vue from 'vue/dist/vue.min';
// import './styles/styles';
// // import ctrl from './controllers/builderCtrl.js';
// // import ctrl1 from './controllers/clickerCtrl.js';
// // import ctrl from './controllers/postCtrl.js';
// import todo from './components/todo';
// import newClicker from './components/newClicker';
// import pugTest from './components/pugTest';
// import profile from './components/profile';
// import newPosts from './components/newPosts';
// ctrl.render();

import router from './router';

new Vue ({
	router,
	el:'#app',
	template: `<div class='byRouter'> <router-link to="/">Click me</router-link> 
					<router-link to="/pugTest">PugTest</router-link>
					<router-link to="/profile">Profile</router-link>
					<router-link to="/todo">TO-DO List</router-link>
					<router-link to="/newPosts">NewPosts</router-link>
					<router-link to="/drow">drow</router-link>  
					<router-view></router-view> 
				</div>`
})