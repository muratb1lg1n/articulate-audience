<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light"  style="background-color: #4C9900;">
      <div class="container collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/"><font-awesome-icon icon='bicycle' /></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Anasayfa</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Paylasimlar</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Etkinlikler</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/profil">Profil</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters,mapActions} from 'vuex';
export default {
  name: 'Anasayfa',
  data () {
    return {
    }
  }
}
</script>
