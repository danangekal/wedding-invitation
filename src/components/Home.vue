<template>
<div id="home" class="uk-background-cover uk-overflow-hidden uk-padding-large uk-padding-remove-bottom uk-padding-remove-horizontal">
  <div class="uk-flex uk-visible@l">
    <div class="uk-card uk-animation-slide-bottom-medium uk-width-xlarge" uk-parallax="target: #home; y: 250; sepia: 40;easing: 0;" style="height:calc(100vh - 150px)">
      <img src="https://3.bp.blogspot.com/-qIHQmJ__cP0/Wi5Xtt9BUvI/AAAAAAAAH_M/TvPbWavPkKUYux6iYHbJsOtAlMBL8prNwCLcBGAs/s1600/couple.png" alt="Couple" class="uk-width-xlarge" style="position:absolute;bottom:0;left:15px;">
    </div>
    <div class="uk-width-expand uk-margin-auto uk-margin-auto-vertical uk-padding-small">
      <h1 class="uk-text-center uk-h1 uk-animation-slide-top home" uk-parallax="target: #home; y: 300;blur: 0,05;easing: 0;">{{ title }}</h1>
      <p class="uk-text-center uk-padding-large uk-animation-slide-top uk-padding-remove-top uk-padding-remove-bottom uk-h3 home" uk-parallax="target: #home; y: 200; blur: 0,05;easing: 0;">{{ deskripsi }}</p>
    </div>
  </div>
  <div class="uk-hidden@l">
    <div class="uk-card uk-responsive-height uk-animation-slide-bottom-medium" uk-parallax="target: #home; y: 250; sepia: 40;easing: 0;">
      <img src="https://3.bp.blogspot.com/-qIHQmJ__cP0/Wi5Xtt9BUvI/AAAAAAAAH_M/TvPbWavPkKUYux6iYHbJsOtAlMBL8prNwCLcBGAs/s1600/couple.png" alt="Couple" class="uk-padding-small uk-padding-remove-top">
    </div>
    <div class="uk-responsive-width uk-margin-auto uk-margin-auto-vertical uk-padding-medium">
      <h1 class="uk-text-center uk-h1 uk-animation-slide-top home" uk-parallax="target: #home; y: 300;blur: 0,05;easing: 0;">{{ title }}</h1>
      <p class="uk-text-center uk-padding-large uk-animation-slide-top uk-padding-remove-top uk-h3 home" uk-parallax="target: #profile; y: 200; blur: 0,05;easing: 0;">{{ deskripsi }}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {

  name: 'Home',

  data () {
    return { title: 'Wedding Invitation', deskripsi: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum quo, id nostrum quam provident perspiciatis neque numquam commodi minima, aut soluta nulla, cum et eum ad veritatis veniam, dolore recusandae' }
  }
}
</script>
<style lang="scss" scoped>
  $colorprimary : #dd183f;

  #home {
    background-image: url('https://4.bp.blogspot.com/-Vkv1EpmPF7E/Wi3whl0qf3I/AAAAAAAAH88/Km_GQFM6JyYX-9-ue7aCMKUjV9BNc0_sQCLcBGAs/s1600/bg.jpg');
    mix-blend-mode: multiply !important;
  }
  .home{
    color: #000000 !important;
  }
  .uk-h1 {
    font-size: 70px !important;
  }

  @media screen and (max-width: 1024px) {
    #home {
      margin-bottom: 0px !important;
    } 
    .uk-h1 {
      font-size: 47px !important;
    }
  }
</style>