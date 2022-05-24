import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    company: {
      title: 'Склад-магазин "Мармеладка"',
      price: 'Прайс',
      address: 'Комсомольск-на-Амуре, Хабаровский край, 681027 Вокзальная, 16 8/2 складское помещение',
      phone: '+7(984)291-43-99',
      email: 'nti3@yandex.ru'
    }
  },
  getters: {
    company: state => {
      return state.company;
    }
  }
})
