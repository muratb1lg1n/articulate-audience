<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-12">
        <h1>Kaydol</h1>
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
        <button class="btn btn-success btn-block" @click="kaydol()">Kaydol</button>
      </div>
       <div class="col-12 mt-3" style="text-align: center;">
        <router-link to="/giris">Zaten bir hesabin var mi? Giris yap!</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'Kaydol',
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
    kaydol(){
      if(this.email==='' || this.sifre===''){
        this.hata.durum = true;
        this.hata.mesaj = 'Lütfen tüm alanları doldurunuz!'
      } else {
        axios.post("http://localhost:3000/kaydol",{email:this.email,sifre:this.sifre})
        .then(veri =>{
          this.$router.push('/');
        })
        .catch(error => {
          this.hata.durum = true;
          this.hata.mesaj = error;
        });
      }
    }
  },
}
</script>

<style scoped>
input{
  margin-bottom: 10px;
}
</style>