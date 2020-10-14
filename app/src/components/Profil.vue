<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-3" id="profilresim">
        <div id="circle"></div>
        <div id="kullaniciad">@{{kullanici.nickname}}</div>
      </div>
      <div class="col-7" id="profildetay">
        <div v-show="!durumacikla">{{kullanici.aciklama}}</div>
        <textarea class="form-control" id="aciklama" v-model="aciklama" v-show="durumacikla" rows="5"></textarea>
        <div id="ilgispor">#tenis #basketbol #bilardo #bisiklet</div>
      </div>
       <div class="col-2" id="butonlar">
        <button @click="durumacikla = true" class="btn float-right" v-show="!durumacikla">Aciklamani Duzenle</button>
        <button @click="aciklamaDegis(aciklama)" class="btn float-right" v-show="durumacikla">Kaydet</button>
        <button @click="durumacikla = false" class="btn float-right" v-show="durumacikla">Vazgec</button>
        <button @click="kullaniciCikis" class="btn float-right" id="cikisbtn">Çıkış Yap</button>
      </div>
    </div>
    <hr id="line">
    <div class="row">
      <div class="col-3" id="profilrouter">
        <ul id="routerlist">
          <li id="paylasilan"><router-link class="btn" to="/profil">Paylastiklarim</router-link></li>
          <li id="paylasilan"><router-link class="btn" to="/profil/etkinlikler">Etkinliklerim</router-link></li>
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
      aciklama:'',
      durumacikla: false,
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
textarea{
  resize: none;
}
#line{
  margin-top: 10px;
  background-color: #812da8;
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
  width: 180px;
  color:#812da8;
  border: #812da8 1px solid;
  border-radius: 8px;
  margin-bottom: 10px;
}
.btn:hover{
  background: #812da8;
  color: white;
  font-weight: bold;
}
#cikisbtn{
  background: #812da8;
  color: white;
}

</style>
