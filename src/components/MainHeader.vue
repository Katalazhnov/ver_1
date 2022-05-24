<template>
  <b-row class="menu__header">
    <b-col md="auto" offset-md="2">
      <router-link to="/">
        <b-button >{{company.title}}</b-button>
      </router-link>
      <router-link to="/price">
        <b-button >{{company.price}}</b-button>
      </router-link>
    </b-col>
  </b-row>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: 'MainHeader',
  computed: {
    ...mapGetters(['company']),
  }
}
</script>

<style scoped>

  .menu__header {
    height: auto;
    padding: 10px;
    background-color: #f0ad4e;
    border-color: #eea236;
    position: absolute;
    right: 0;
    left: 0;
    z-index: 1000;
  }

  .btn {
    border: none !important;
    background-color: transparent !important;
    box-shadow: none !important;
    color: white;
    padding: 5px 15px;
    font-size: 18px;
  }

</style>