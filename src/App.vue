<template>
  <div id="app" class="uk-overflow-hidden">
    <Navbar/>
    <Home/>
    <Profile/>
    <Gallery/>
    <Story/>
    <Invitation/>
    <Support/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Home from './components/Home'
import Profile from './components/Profile'
import Gallery from './components/Gallery'
import Story from './components/Story'
import Invitation from './components/Invitation'
import Support from './components/Support'

export default {
  name: 'app',
  components: {
    Navbar, Home, Profile, Gallery, Story, Invitation, Support
  },
  head: {
    title: {
      inner: 'Wedding',
      separator: '-',
      complement: 'Dewi & Danang'
    },
    // Meta tags
    meta: [
      { name: 'application-name', content: 'weddinginvitation' },
      { name: 'description', content: 'Fulanah & Fulan are getting married! Celebrate the day!', id: 'desc' }, // id to replace intead of create 
      // Facebook / Open Graph
      // { property: 'fb:app_id', content: '447049705696883' },
      // { property: 'og:title', content: 'Wedding - Fulanah & Fulan' },
      // { property: 'og:url', content: 'http://wedding.invitation.com/' },
      // { property: 'og:type', content: 'website' },
      // { property: 'og:description', content: 'Fulanah & Fulan are getting married! Celebrate the day!' },
      // { property: 'og:image', content: 'http://menica.co.id/assets/theme6/grey/images/grey/gallery/gal1.jpg' },
    ],
    // link tags
    link: [
      { rel: 'canonical', href: 'http://wedding.invitation.com', id: 'canonical' },
      { rel: 'author', href: 'author', undo: false }, // undo property - not to remove the element
      { rel: 'icon', href: 'https://3.bp.blogspot.com/--0Re6EM0O9c/Wi3whfv5tOI/AAAAAAAAH84/eL-i2fCMOGEc9Xb7pt6GhbDnLxr-OxjnwCLcBGAs/s1600/couple.png', sizes: '16x16', type: 'image/png' }, 
    ]
  }
}
</script>

<style lang="scss">
  $colorprimary : #dd183f;

  @import url('https://fonts.googleapis.com/css?family=Niconne');

  body h1, .uk-logo {
    font-family: 'Niconne', cursive !important;
    font-size: 35px !important;
  }
  .title {
    color: #ffffff !important;
    font-size: 30px !important;
    padding-top: 10px !important;
    padding-bottom: 10px !important;
  }
  .title:hover, .title:focus {
    color: #000000 !important;
  }
  .uk-heading-line {
    background: #ef5974 !important;
  }   
  
  @media screen and (max-width: 1024px) {
     body h1, .uk-logo {
      font-family: 'Niconne', cursive !important;
      font-size: 35px !important;
    }
    p {
      font-size: 14px !important;
    } 
    h1 {
      font-size: 25px !important;
    }
    .title {
      padding-top: 10px !important;
      padding-bottom: 10px !important;
    }
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>