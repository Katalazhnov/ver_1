<template>
  <div id="app">
    <b-container class="main__container" fluid="xl">
      <MainHeader />
      <div class="container">

        <router-view/>
      </div>
    </b-container>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader'

export default {
  name: 'App',
  components: {
    MainHeader
  }
}
</script>

<style>
  body, html {
    height: 100%;
    color: #333333;
    font-family: 'Roboto Condensed', sans-serif !important;
    background-image: url(./assets/back.png);
  }

  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 150px;
  }

  h1 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
  }
  
  @font-face {
    font-family: 'Roboto Condensed';
    src: local('Roboto Condensed Thin'), local('Roboto Condensed-Thin'),
      url('~@/assets/fonts/RobotoCondensed-Regular.woff2') format('woff2'),
      url('~@/assets/fonts/RobotoCondensed-Regular.woff') format('woff');
  }
</style>