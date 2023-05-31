<template>
  <NavBar/>
  <!-- <Main msg="Welcome to Kanten"/> 
  <Events msg="Events Page"/> -->
  <Gallery/>
  <!-- <Merch/> 
  <Newsletter/>
  <Prime/>
  <Sponsor/> 
  <Volunteers/> -->
  <Footer/> 
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
// import Main from './views/Main.vue'
// import Events from './views/Events.vue'
import Gallery from './views/Gallery.vue'
// import Merch from './views/Merch.vue'
// import Newsletter from './views/NewsLetter.vue'
// import Prime from './views/Prime.vue'
// import Sponsor from './views/Sponsor.vue'
// import Volunteers from './views/Volunteers.vue'

export default {
  name: 'App',
  components: {
    // Main,
    NavBar,
    // Events,
    Gallery,
    // Merch,
    // Newsletter,
    // Prime,
    // Sponsor,
    // Volunteers,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
