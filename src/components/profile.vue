<template lang='pug'>
	div#questionary
		div.left_questionary
			img(src='https://demiweb.pro/upload/iblock/6d7/6d7593a50b28255900a1e2598d1d0906.png')

			p {{caption}}
		div.right_questionary
			h3 {{title}}
			p(v-for='citation in citations') {{citation}}
</template>			
		

<script>
	export default {
		data(){
			return {
			caption: 'Кто такой программист?',
			title: 'Немного википедии',
			citations: [
				'Программи́ст — специалист, занимающийся непосредственной разработкой программного обеспечения для различного рода вычислительно-операционных систем.',
				'Программирование, как род занятий, может являться основной профессиональной деятельностью специалиста, либо использоваться в качестве вспомогательной деятельности для решения иных профессиональных задач, либо же использоваться в непрофессиональной сфере.',
				'Термин «программист» не обязательно подразумевает профессиональное образование или профессиональную деятельность.',
		        'Предметом деятельности программистов в науке является решение задач с применением методов прикладной математики и реализацией на ЭВМ (результатом деятельности является полученное при помощи программы решение задачи.'
				
				]
			}
		}
	}
</script>


<style lang='scss' scoped> 

@import '../styles/_reset.scss';
@import '../styles/_var.scss';

@font-face {
	font-family: 'Roboto';
	font-weight: bolder;
	src: url('~fonts/Roboto-Bold');
}
@font-face {
	font-family: 'Roboto-Regular';
	src: url('~fonts/Roboto-Regular');
}

	#questionary {
		margin-top: 30px;
		background: url('https://ridero.ru/books/visual_basic_dlya_novichkov_shag_za_shagom/image/57754efe97c363a45cff1e6a') no-repeat;
		background-size: cover;
		background-position: center;
		height: 500px;
		display: flex;
		justify-content: center;
		padding-top: 9.5%;

		.left_questionary{
			flex-basis: 30%;

			img {
				border-radius: 100%;
				margin: 20% 0 1% 2%;
				width: 300px;
			}
			p {
				font-family: 'Roboto-Regular';
				width: 280px;
				margin-left: 10%;
				line-height: 30px;
			}
		}
		.right_questionary {
			flex-basis: 40%;
			padding-left: 5%;

			h3 {
				font-family: 'Roboto';
				text-align: center;
			}
			p {
				font-family: 'Roboto-Regular';
				font-size: 14px;
				text-indent: 2em;
				text-align: justify;
				margin: 0;
			}
		}
	}	
</style>