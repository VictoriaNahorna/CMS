<template>
	<div id="newClicker">
		<input type="text" v-model='text'>
		<button v-on:click='clickMe'>Click me</button>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				text: 0,
				isActive: false
			}
		},
		methods: {
			clickMe: function() {
				if (!this.isActive) {
					this.isActive = true;
				    setTimeout (() =>{
				    	this.isActive = false;
				    	alert(this.text);
				    	this.text = 0;
			    	}, 5000);
				};
			this.text++;	
			}
		}
	}
</script>


<style lang='scss' scoped> 

@import '../styles/_var.scss';

	#newClicker {
		@extend .interface_by_Vue;
	}	
</style>