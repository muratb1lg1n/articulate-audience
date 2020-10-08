<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-12">
        <button @click="kullaniciCikis" class="btn btn-danger float-right">Çıkış Yap</button>
      </div>
      <div class="col-3" id="profilresim">
      <div id="circle"></div>
      <div id="kullaniciad">Kullanici Adi<br>@rumuz</div>
      </div>
      <div id="profildetay">
        <div id="aciklama">Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik</div>
        <div id="ilgispor">#tenis #basketbol #bilardo #bisiklet</div>
      </div>
    </div>
    <div class="col-12" id='line'></div>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters,mapActions} from 'vuex';
export default {
  name: 'Profil',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'kullanici'
    ])
  },
  methods: {
    ...mapActions([
      'kullaniciCikis'
    ])
  },
}
</script>

<style scoped>
#aciklama{
  -webkit-column-width: auto;
  -moz-column-width: auto;
  column-width: auto;
}
#circle{
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: grey;
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
  background-color: black;
  height: 1px;
}
</style>
