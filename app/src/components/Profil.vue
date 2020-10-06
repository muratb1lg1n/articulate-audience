<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-12">
        <button @click="kullaniciCikis" class="btn btn-danger float-right">Çıkış Yap</button>
      </div>
      <div class="col-12">
        <h4>Profil</h4>
        {{kullanici}}
        <hr>
        <div class="row">
          <div class="col-12 col-md-6">
            <strong>Kullanıcı Adı: </strong> 
          </div>
          <div class="col-12 col-md-6">
            <strong>İsim: </strong> 
          </div>
          <div class="col-12 col-md-6">
            <strong>Kayıt Tarihi: </strong> 
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
</style>
