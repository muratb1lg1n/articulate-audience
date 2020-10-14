<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-3" id="profilresim">
        <div id="circle"></div>
        <div id="kullaniciad">@{{kullanici.nickname}}</div>
      </div>
      <div class="col-7" id="profildetay">
        <div id="aciklama">Aciklaman bos gozukuyor</div>
        <div id="ilgispor">#tenis #basketbol #bilardo #bisiklet</div>
      </div>
       <div class="col-2" id="butonlar">
        <button @click="aciklamaDegis" class="btn btn-info float-right">Aciklamani Duzenle</button>
        <button @click="kullaniciCikis" class="btn btn-danger float-right">Çıkış Yap</button>
      </div>
    </div>
    <hr id="line">
    <div class="row">
      <div class="col-3" id="profilrouter">
        <ul id="routerlist">
          <li id="paylasilan"><router-link class="btn btn-outline-secondary" to="/profil">Paylastiklarim</router-link></li>
          <li id="paylasilan"><router-link class="btn btn-outline-secondary" to="/profil/etkinlikler">Etkinliklerim</router-link></li>
        </ul>
      </div>
      <div class="col-9">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  name: 'Profil',
  data () {
    return {
    }
  },
  mounted(){
    this.kullaniciProfil();
  },
  computed: {
    ...mapGetters([
      'kullanici'
    ])
  },
  methods: {
    ...mapActions([
      'kullaniciCikis',
      'kullaniciProfil',
      'aciklamaDegis'
    ])
  },
}
</script>

<style scoped>

#circle{
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: grey;
  margin: 0 auto;
}
#kullaniciad{
  text-align: center;
  margin-top: 7px;
}
#profildetay{
  float: right;
  max-width: 700px;
}
#line{
  margin-top: 10px;
  background-color: #4C9900;
  height: 1px;
}
ul{
  margin-bottom: 0;
  left: 20px;
}
li{
  list-style: none;
  margin-top: 40px;
  text-align: center;
}
.btn{
  width: 130px;
}
.btn:focus{
  border-color: greenyellow;
}

</style>
