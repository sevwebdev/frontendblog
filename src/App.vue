<template>
  <div id="welcome">
    <Header/>
    <Home msg="The Front-end Bible"/>
    <Footer/>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Home,
    Header,
    Footer
  }
}
</script>

<style lang="scss">

  @import url('https://fonts.googleapis.com/css?family=Fredoka+One|Oswald');

  $primary-color: black;
  $secondary-color: #f4c430;
  $tertiary-color: #888888;

  $white: white;

  $hover-color: $secondary-color;
  $header-bg: $primary-color;
  $footer-bg: $primary-color;

  body {
    font-family: 'Oswald', sans-serif !important;
    color: black !important;
    min-height: 100vh;

   //titles

    .title {
      font-family: 'Fredoka One', cursive;
      text-transform: uppercase;
      font-weight: 300 !important;
      text-align: center;
    }
    h1.title.h1 {
      font-size: 78px;
      background: $secondary-color;
      color: $white;
      padding: .5em;
    }
    h2.title {
      font-size: 30px;
    }
    h3.title {
      font-size: 24px;
    }
    a, a.button {
      color: $secondary-color;
    }
    ul {
      list-style-type: none;
      padding: 0;
    }
    li {
      display: inline-block;
      margin: 0 10px;
    }

    //layout
    .flex {
      display: flex;
    }
  }

</style>
