<template>
  <div class="container">
    <div class="row mt-5">
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
      <div class="col-12 mt-3" style="text-align: center;">
        <router-link to="/kaydol">Hesabin yok mu? Hemen bir tane olustur!</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Giris',
  data () {
    return {
      email: '',
      sifre: '',
      hata:{
        durum: false,
        mesaj: ''
      }
    }
  },
  methods:{
    girisYap(){
      if(this.email==='' || this.sifre===''){
        this.hata.durum = true;
        this.hata.mesaj = 'Lütfen tüm alanları doldurunuz!'
      } else {
        axios.post("http://localhost:3000/giris",{email:this.email,sifre:this.sifre})
        .then(veri =>{
          this.$router.push('/');
        })
        .catch(error => {

        });
      }
    }
  }
}
</script>

<style scoped>
  input{
    margin-bottom: 10px;
  }
</style>
