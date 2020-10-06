import Vue from 'vue';
import Vuex from 'vuex';
import kullanici from './kullanici';
import paylasim from './paylasim';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    kullanici,
    paylasim
  }
})