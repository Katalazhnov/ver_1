<template>
  <div class="namebox">
    <div class="logobox">
      <img src="../assets/logo.png" height="180px">
      <h1>{{company.title}}</h1>
      <router-link to="/price">
        <b-button > Открыть прайс-лист » </b-button>    
      </router-link>
    </div>

    <hr>

    <div>
      <b-row>
        <b-col >
          <h3>Адрес</h3>
          {{company.address}}
        </b-col>
        <b-col >
          <h3>Контакты</h3>
          Тел: <a href="tel:79842914399" title="Позвонить">{{company.phone}}</a> 
          <br>
          Email: <a href="mail:nti3@yandex.ru" title="Написать">{{company.email}}</a>
        </b-col>
      </b-row>
    </div>

    <hr>

 

    <div class="map">

      <h3 class="maptext">Карта проезда</h3>

      <yandex-map
        :coords="coords"
        zoom="15"
        :settings="settings"
        style="width: 100%; height: 100%;"
      >
        <!--Markers-->
      </yandex-map>
    </div>
  </div>
</template>

<script>
import { yandexMap } from 'vue-yandex-maps'
import { mapGetters } from "vuex";

export default {
  name: 'LogoBox',
  components: { yandexMap },
  computed: {
    ...mapGetters(['company']),
  },
  data: () => ({
    coords: [50.552318, 137.008680],
    settings: {
      apiKey: 'e4850523-5105-438a-ad6a-f7710a3bce77',
      lang: 'ru_RU',
      coordorder: 'latlong',
      enterprise: false,
      version: '2.1'
    }
  })
}
</script>



<style scoped>
  a {
    color: red;
  }

  .map {
    height: 400px;
    margin-top: 30px;
  }
  .maptext {
    margin-bottom: 30px;
  }
  .namebox {
    background-color: rgba(238, 238, 238, 0.5);
    text-align: center;
  }

  .logobox {
    padding-bottom: 20px;
  }

  h1 {
    font-size: 63px;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 24px;
  }

  hr {
      margin-top: 20px;
      margin-bottom: 20px;
  }
  .btn {
    box-shadow: none !important;
    color: white;
    background-color: #f0ad4e !important;
    border-color: #eea236 !important;
    padding: 10px 16px;
    font-size: 18px;
    border-radius: 6px;
  }

  .btn:hover {
    background-color: #ec971f !important;
    border-color: #d58512 !important;
  }

  .btn:active {
    box-shadow: inset 0px 0px 50px #be7710 !important;
  }

</style>