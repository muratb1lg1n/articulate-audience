<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-12">
        <h4>Bir Şeyler Paylaş!</h4>
        <textarea v-model="icerik" class="form-control" rows="5" ></textarea>
        <button @click="paylasimEkle(icerik)" class="btn btn-success btn-lg float-right mt-4">Gönder</button>
      </div>
      <div class="col-12 mb-5">
        <h4>Bugün Paylaşılanlar</h4>
          <ul>
            <li v-for="paylasim in paylasimlar" :key="paylasim._id">
              {{paylasim.icerik}}<br>
              {{paylasim.kullaniciBilgisi[0].nickname}}
              <button @click="paylasimSil(paylasim)" class="btn btn-light btn-sm float-right">sil</button>
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
</style>
