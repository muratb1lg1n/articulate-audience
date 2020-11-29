import Vue from 'vue';
import Vuex from 'vuex';
import user from './user';
import post from './post';
import other from './other';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    post,
    other
  }
})