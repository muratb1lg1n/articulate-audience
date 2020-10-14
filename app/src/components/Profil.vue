<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-12">
        <button @click="kullaniciCikis" class="btn btn-danger float-right">Çıkış Yap</button>
      </div>
      <div class="col-3" id="profilresim">
        <div id="circle"></div>
        <div id="kullaniciad">@{{kullanici.nickname}}</div>
      </div>
      <div class="col-9" id="profildetay">
        <div id="aciklama">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bistry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, whenalso the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
        <div id="ilgispor">#tenis #basketbol #bilardo #bisiklet</div>
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
      'kullaniciProfil'
    ])
  },
}
</script>

<style scoped>

#aciklama{
  -webkit-column-width: auto;
  -moz-column-width: auto;
  column-width: auto;
  max-height: 170px;
}
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
