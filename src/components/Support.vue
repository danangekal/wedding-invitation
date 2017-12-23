<template>
	<div id="support">
		<!-- <h1 class="uk-heading-line uk-text-center uk-h1 uk-padding-small title" uk-scrollspy="cls:uk-animation-slide-top-small"><span>Supported</span></h1> -->
		<h2>Supported</h2>
		<div class="wrapper">
			<div class="uk-responsive-width uk-visible@l">
				<ul class="uk-list uk-responsive-width">
					<li>1. Hosting By <a href="http://diundang.com" target="_blank">diundang.com</a> - <a href="https://www.facebook.com/drs11" target="_blank">Daeng Rosanda</a></li>
				    <li>2. Basic Template By <a href="http://codecerdas.com" target="_blank">codecerdas.com</a> - <a href="https://www.facebook.com/chandika.nurdiansyah.9" target="_blank">Chandika Nurdiansyah</a></li>
				    <li>3. Videoshoot, Photoshoot And Editing By <a href="https://www.facebook.com/fachreza.i.akbar" target="_blank">Fachreza Iryansyah</a></li>
				 </ul>
			</div>
			<div class="uk-responsive-width uk-hidden@l">
				<ul class="uk-list uk-responsive-width">
					<li>1. Hosting By <a href="http://diundang.com" target="_blank">diundang.com</a> - <a href="https://www.facebook.com/drs11" target="_blank">Daeng Rosanda</a></li>
				    <li>2. Basic Template By <a href="http://codecerdas.com" target="_blank">codecerdas.com</a> - <a href="https://www.facebook.com/chandika.nurdiansyah.9" target="_blank">Chandika Nurdiansyah</a></li>
				    <li>3. Videoshoot, Photoshoot And Editing By <a href="https://www.facebook.com/fachreza.i.akbar" target="_blank">Fachreza Iryansyah</a></li>
				</ul>
			</div>

			<p class="copyright">Copyright &copy; 2017</p>
		</div>
	</div>
</template>

<script>
export default {

  name: 'Support',
}
</script>

<style lang="css" scoped>
	#support {
        background-color: #c1ebf7;
    } 
    .wrapper {
    	padding-bottom: 5px;
    }
    .copyright {
    	font-weight: bold;
    }

	@media screen and (max-width: 1024px) {
		li {
			font-size: 14px;
			margin-left: 15px;
			margin-right: 15px;
		}
	}
</style>