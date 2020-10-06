<template>
  <div id="giris" class="pt-5">
    <div class="container mt-5">
      <div class="row">
        <div class="col-12">
          <h1>Giriş</h1>
          <div v-show="hata.durum" class="alert alert-danger" role="alert">
            {{hata.mesaj}}
          </div>
        </div>
        <div class="col-12">
          <input type="text" class="form-control" v-model="email" placeholder="Email">
        </div>
        <div class="col-12">
          <input type="text" class="form-control" v-model="sifre" placeholder="Şifre">
        </div>
        <div class="col-12">
          <button class="btn btn-success btn-block" @click="girisYap()">Giriş</button>
        </div>
        <div class="col-12 mt-3 text-center">
          <router-link to="/kaydol">Hesabin yok mu? Hemen bir tane olustur!</router-link>
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
      email: 'temhaangelio@gmail.com',
      sifre: '11',
      hata:{
        durum: false,
        mesaj: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'kullanici'
    ])
  },
  methods: {
    ...mapActions([
      'kullaniciGiris'
    ]),
    girisYap(){
      if(this.email==='' || this.sifre===''){
        this.hata.durum = true;
        this.hata.mesaj = 'Lütfen tüm alanları doldurunuz!'
      } else {
        this.kullaniciGiris({'email':this.email,'sifre':this.sifre})
      }
    }
  },
}
</script>

<style scoped>
  #giris{
    height: 100vh;
    background: url('../assets/bg.jpg') no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .container{
    max-width: 500px;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 50px 30px 70px 30px;
  }
  input{
    margin-bottom: 10px;
  }
</style>
