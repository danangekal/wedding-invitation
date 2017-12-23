<template>
	<div id="profile">
		<div>
			<h1 class="uk-heading-line uk-text-center uk-h1 uk-padding-small title" uk-scrollspy="cls:uk-animation-slide-top-small"><span>Our Profile</span></h1>
			<div>
				<div class="uk-column-1-2@l uk-padding-large">
					<div uk-scrollspy="cls:uk-animation-slide-left-medium" class="uk-padding-large uk-padding-remove-horizontal uk-padding-remove-top">
						<img src="http://menica.co.id/assets/theme7/orange/images/salem/gallery/bride.jpg" :alt="wanita.nama" class="uk-border-circle uk-width-medium@l uk-width-large uk-box-shadow-large uk-width-small">
						<div class="uk-padding-small uk-padding-remove-bottom">
							<h2 class="uk-h2">{{ wanita.nama }}</h2>
							<p class="text-deskripsi uk-width-large@l uk-width-xxlarge uk-text-justify uk-margin-auto-right uk-margin-auto-left">{{ wanita.deskripsi }}</p>
						</div>
					</div>
					<div uk-scrollspy="cls:uk-animation-slide-right-medium" class="uk-padding-large uk-padding-remove-horizontal  uk-padding-remove-bottom@m uk-padding-remove-bottom@s uk-padding-remove-bottom@xs uk-padding-remove-top">
						<img src="http://menica.co.id/assets/theme6/grey/images/grey/gallery/groom.jpg" :alt="pria.nama" class="uk-border-circle uk-width-medium@l uk-width-large uk-box-shadow-large">
						<div class="uk-padding-small uk-padding-remove-bottom">
							<h2 class="uk-h2">{{ pria.nama }}</h2>
							<p class="text-deskripsi uk-width-large@l uk-width-xxlarge uk-text-justify uk-margin-auto-right uk-margin-auto-left">{{ pria.deskripsi }}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Profile',

  data () {
    return { pria: { nama: 'Fulan', deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quo, id nostrum quam provident perspiciatis neque numquam commodi minima, aut soluta nulla, cum et eum ad veritatis veniam, dolore recusandae' }, wanita: { nama: 'Fulanah', deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quo, id nostrum quam provident perspiciatis neque numquam commodi minima, aut soluta nulla, cum et eum ad veritatis veniam, dolore recusandae' } }
  }
}
</script>

<style lang="css" scoped>
	#profile {
		padding-top: 1px;
        background-color: #c1ebf7;
	}
    .text-deskripsi {
    	color: #666666 !important;
    }

	@media screen and (max-width: 1024px) {
		
	}
</style>