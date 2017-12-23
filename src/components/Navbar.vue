<template>
	<div>
		<div id="nav-l">
			<nav class="uk-navbar-container uk-margin uk-box-shadow-medium uk-visible@l" uk-scrollspy-nav="scroll: true;offset: 80;closest: li;" uk-sticky="bottom: body" uk-navbar>
				<div class="uk-navbar-center">
					<div class="uk-navbar-center-left">
						<div>
							<ul class="uk-navbar-nav">
								<li><a href="#profile">Profile</a></li>
								<li><a href="#gallery">Gallery</a></li>
							</ul>
						</div>
					</div>
					<a class="uk-navbar-item uk-logo" href="#home">Fulanah <i class="uk-padding-small" uk-icon="icon: heart"></i> Fulan</a>
					<div class="uk-navbar-center-right">
						<div>
							<ul class="uk-navbar-nav">
								<li><a href="#story">Story</a></li>
								<li><a href="#invitation">Invitation</a></li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</div>
		<nav class="uk-navbar-container uk-margin uk-box-shadow-medium uk-hidden@l nav-m" uk-scrollspy-nav="scroll: true;offset: 80;closest: li;" uk-sticky="bottom: body" uk-navbar="mode: click">
			<a class="uk-navbar-item uk-logo" href="#home">Fulanah <i class="uk-padding-small" uk-icon="icon: heart"></i> Fulan</a>
			<div class="uk-navbar-right uk-padding-small uk-padding-remove-vertical">
				<ul class="uk-navbar-nav">
			        <li>
			        	<a class="uk-navbar-toggle" uk-navbar-toggle-icon></a>
				        <div class="uk-navbar-dropdown">
				            <ul class="uk-nav uk-navbar-dropdown-nav">
								<li><a href="#profile">Profile</a></li>
								<li><a href="#gallery">Gallery</a></li>
								<li><a href="#story">Story</a></li>
								<li><a href="#invitation">Invitation</a></li>
							</ul>
				        </div>
				    </li>
				</ul>
			</div>
		</nav>
	</div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'Navbar',

  mounted: function(){
  	if ($(window).width() < 1024 ) {
  		$('#nav-l').remove()
  	}
  }
}
</script>

<style lang="scss" scoped>
  	$colorprimary : #ef5974;

	.uk-sticky-placeholder {
		margin: 0 !important;
	}
	.uk-navbar-container {
		background: $colorprimary !important;
	}
	.uk-navbar-nav > li > a {
		color: #ffffff !important;
	}
	.uk-navbar-nav > li > a:hover, .uk-navbar-nav > li > a:focus  {
		color: #000000 !important;
	}
	.uk-navbar-item.uk-logo {
		color: white !important;
	}
	.uk-logo:hover, .uk-logo:focus {
		color: #000000 !important;
	}
	.uk-navbar-item.uk-logo:after {
		border-top: 25px solid $colorprimary !important;
		position: absolute !important;
		top: 100% !important;
		left: 0 !important;
		content: "";
	}

	@media screen and (max-width: 1024px) {
		.uk-navbar-dropdown-nav > li > a {
			color: #dd183f !important;
		}
		.uk-navbar-dropdown-nav > li > a:hover, .uk-navbar-dropdown-nav > li > a:focus {
			color: #000000 !important;
		}
		.uk-navbar-item.uk-logo:after {
			border-top: 25px solid transparent !important;
			border-left: 108px solid transparent !important;
			border-right: 108px solid transparent !important;
			position: absolute !important;
			top: 100% !important;
			left: 0 !important;
			content: "";
		}
		.uk-navbar-dropdown {
			width: 100%;
			left: 0 !important;
			top: 65px !important;
		}
	}
</style>