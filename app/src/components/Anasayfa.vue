<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto" id="anaul">
          <li class="nav-item" id="logo">
            <router-link class="nav-link" to="/"><font-awesome-icon icon='bicycle' /></router-link>
          </li>
          <li class="nav-item" id="giris">
            <router-link class="nav-link" to="/"><div id="rect">Anasayfa</div></router-link>
          </li>
          <li class="nav-item" id="paylasimlar">
            <router-link class="nav-link" to="/"><div id="rect">Paylasimlar</div></router-link>
          </li>
          <li class="nav-item" id="tartismalar">
            <router-link class="nav-link" to="/"><div id="rect">Tartismalar</div></router-link>
          </li>
          <li class="nav-item" id="etkinlikler">
            <router-link class="nav-link" to="/"><div id="rect">Etkinlikler</div></router-link>
          </li>
        </ul>
        <ul class="navbar-nav" id="profilul">
          <li class="nav-item" id="profil">
            <router-link class="nav-link" to="/profil"><div id="rect">Profil</div></router-link>
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
<style scoped>
.navbar{
  background-color: #4C9900;
  line-height: 0
}
li{
  list-style: none;
}

#rect{
  width: 90px;
  height: 40px;
  border-radius: 10px;
  background-color: rgba(196, 196, 196, 0.7);
  text-align: center;
  display: flex;
  justify-content:center;
  align-items: center;
}
#rect:hover{
  width: 90px;
  height: 40px;
  border-radius: 10px;
  background: rgba(196, 196, 196, 0.7);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
  display: flex;
  justify-content:center;
  align-items: center;
}

</style>