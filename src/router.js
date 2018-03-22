import Vue from 'vue';
import VueRouter from 'vue-router';
import './styles/styles';
import Vue from 'vue/dist/vue.min';
import todo from './components/todo';
import newClicker from './components/newClicker';
import pugTest from './components/pugTest';
import profile from './components/profile';
import newPosts from './components/newPosts';
import drow from './components/drow';


Vue.use(VueRouter);

export let routes = [
	{
		path: '/',
		component: newClicker
	},
	{
		path: '/todo',
		component: todo
	},
	{
		path: '/pugTest',
		component: pugTest
	},
	{
		path: '/profile',
		component: profile
	},
	{
		path: '/newPosts',
		component: newPosts
	},
	{
		path: '/drow',
		component: drow
	}
];

export default new VueRouter({
	routes
});
