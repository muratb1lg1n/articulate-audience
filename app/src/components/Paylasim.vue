<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-12">
        <h4>Bir Şeyler Paylaş!</h4>
        <textarea v-model="icerik" class="form-control" rows="5"></textarea>
        <button @click="paylasimEkle(icerik)" class="btn float-right mt-4">Gönder</button>
      </div>
      <div class="col-12 mb-5">
        <h4>Bugün Paylaşılanlar</h4>
          <ul>
            <li v-for="paylasim in paylasimlar" :key="paylasim._id">
              <button @click="paylasimSil(paylasim)" class="btn float-right" id="silbtn">sil</button>
              {{paylasim.icerik}}<br>
              {{paylasim.kullaniciBilgisi[0].nickname}}

            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  name: 'Paylasim',
  data () {
    return {
      icerik:''
    }
  },
  mounted(){
    this.paylasimListele();
  },
  computed: {
    ...mapGetters([
      'paylasimlar'
    ])
  },
  methods: {
    ...mapActions([
      'paylasimListele',
      'paylasimEkle',
      'paylasimSil'
    ])
  },
}
</script>

<style scoped>

textarea{
  resize: none; 
}
ul{
  margin: 0px;
  padding: 0px;
}
li{
  margin-top: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 10px;
  list-style-type: none;
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
#silbtn{
  width: 42px;
  vertical-align: top;
}

</style>
