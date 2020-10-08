<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-12">
        <h4>Bir Şeyler Paylaş!</h4>
        <textarea v-model="icerik" class="form-control" rows="5" ></textarea>
        <button @click="paylasimEkle(icerik)" class="btn btn-success btn-lg float-right mt-4">Gönder</button>
      </div>
      <div class="col-12">
        <h4>Bugün Paylaşılanlar</h4>
        <div class="card mt-2">
          <div class="card-body">
            <ul>
              <li v-for="paylasim in paylasimlar" :key="paylasim._id">
                {{paylasim.icerik}}
                <button @click="paylasimSil(paylasim)" class="btn btn-light btn-sm float-right">sil</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapGetters,mapActions} from 'vuex';
export default {
  name: 'Giris',
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
li{
  margin-top: 10px;
}
</style>
