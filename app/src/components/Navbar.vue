<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <router-link class="nav-link" to="/"><div id="rect1">Articulate Audience</div></router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" :to="'/profile/'+user.nickname"><div id="rect2">Profile</div></router-link>
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
  name: 'Navbar',
  async mounted(){
    await this.userProfile();
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  ...mapActions([
    'userProfile'
  ]),
}

</script>

<style scoped>

.navbar{
  background-color: #812da8;
  line-height: 2;
  font-size: large;
}
li{
  list-style: none;
}
#rect1{
  width: 200px;
  height: 40px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content:center;
  align-items: center;
}
#rect2{
  width: 110px;
  height: 40px;
  border-radius: 10px;
  text-align: center;
  display: flex;
  justify-content:center;
  align-items: center;
}
#rect1:hover,#rect2:hover{
  color: #812da8;
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

</style>