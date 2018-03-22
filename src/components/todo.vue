<template>
	<div id="todo">
		<input v-model="message" placeholder="Add new task & click Enter" @keyup.enter="saveMessage">
		<button type="button" name="button" class="transparent" @keyup.click="button">Add</button>
    <button type="button" name="button" class="transparent" @keyup.click="button">Delete</button>
		<ul>
			<li v-for='list in lists'  
				v-bind:class="{strike: list.isDone}">{{list.text}} 
				<input type="checkbox" v-model="list.isDone"></li>

				<div class="addTask">
      
    </div>
			<li v-for='message in newLists'
				v-bind:class="{strike: message.completed}">
				{{message.text}}
				<input type="checkbox" v-model="message.completed"></li>
				
		</ul>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				message: '',
				lists: [
				{text:'Work',
				isDone: false
				},
				// {text:'Dinner',
				// isDone: false
				// },	
				{text:'Read',
				isDone: true
				},		
				{text:'Sleep',
				isDone: false
				}
				],
				newLists: []
				}
			},
			methods: {
				handleMessage: function(message) {
					// this.newLists.push({text: message, completed: false});
				},


				clearCompleted() {
      this.message = this.message.filter(this.inProgress);
    },

inProgress(message) {
      return ! this.isCompleted(message);
    },

    clearAll() {
      this.message = [];
    },
				saveMessage: function() {
					this.newLists.push({text: this.message, completed: false});
					this.message = '';
				}
			}
		}
</script>

<style lang='scss' scoped> 

@import '../styles/_reset.scss';
@import '../styles/_var.scss';

	#todo {
		@extend .interface_by_Vue;
		color: $light_black;
		ul {
			list-style: none;
			margin-left: 30px;
		}
		.strike {
	    text-decoration: line-through;
	    color: $light_red;
		}
	}
</style>