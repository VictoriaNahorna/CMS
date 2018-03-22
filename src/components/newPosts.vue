<template>
	<div id="new_posts">
		<div class='new_posts_item' v-for="post in posts">
			<h3>{{ post.title }}</h3>
			<p>{{ post.body }}</p>
		</div>
	</div>	
</template>
<script>
export default {
  data () {
    return {
      posts: []
    }
  },
  created: function() {
    fetch('https://jsonplaceholder.typicode.com/posts').then((r) => r.json()).then(json => {this.posts = json});
    fetch('https://jsonplaceholder.typicode.com/posts').then((r) => r.json()).then(json => console.log(json));         
  }
}
</script>

<style lang="scss" scoped>

@import '../styles/_reset.scss';
@import '../styles/_var.scss';

	#new_posts {
		margin-top: 25px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		background-color: $purple;
		
		.new_posts_item {
			@extend .interface_tile;
			border-radius: 15px;
			background-color: $light_purple;
			color: $dark_violet;

			h3 {
				text-align: center;
				font-weight: bolder;
			}
		}
	}	
</style>