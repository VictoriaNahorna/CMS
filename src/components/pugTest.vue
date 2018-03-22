<template lang='pug'>
	div#pugTest
		input#file(type='file')
		p {{file.message}}
		input#image(type='file')
		br
		img#picture
		br
		canvas#container_for_img
</template>	
<script>
	export default {
		data(){
			return {
			file: {message: ''},

			image: ''
			}
		},
		mounted() {
				let input = document.getElementById('file'),
					output_first = this.file,
					image = document.getElementById('image'),
					picture = document.getElementById('picture'),
					output_second = this.file;

				let container_for_img = document.getElementById('container_for_img'),
					cont = container_for_img.getContext('2d'),
					pic = new Image();


				input.onchange = function(){
				let list = this.files;
					let file = list[0];
					let reader = new FileReader();
					

					reader.onloadend = function(event){
						let text = event.target.result;
			
						output_first.message = text;
					}
					reader.readAsText(file);
				}

				image.onchange = function(){
					let list = this.files;
					let file = list[0];
					let reader = new FileReader();

					reader.onloadend = function(event){
						let img = event.target.result;
					
						output_second = picture.setAttribute("src", img);
					}
					reader.readAsDataURL(file);

					picture.onload = function () {
						cont.clearRect(0, 0, container_for_img.width, container_for_img.height);
						pic.src = picture.getAttribute('src');
						cont.drawImage(pic, 0, 0);
					}
				}
		
		}
	}

</script>

<style lang='scss' scoped> 

@import '../styles/_reset.scss';
@import '../styles/_var.scss';

	#pugTest {
		@extend .interface_by_Vue;
	}

</style>