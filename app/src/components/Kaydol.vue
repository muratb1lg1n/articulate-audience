<template>
  <div id="kaydol">
    <div class="container">
      <div class="row ">
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
          <input type="text" class="form-control" v-model="nickname" placeholder="Kullanici Adi">
        </div>
        <div class="col-12">
          <button class="btn btn-success btn-block" @click="kaydol()">Kaydol</button>
        </div>
        <div class="col-12 mt-3" style="text-align: center;">
          <router-link to="/giris">Zaten bir hesabin var mi? Giris yap!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  name: 'Kaydol',
  data () {
    return {
      email: '',
      sifre: '',
      nickname: '',
      hata:{
        durum: false,
        mesaj: ''
      }
    }
  },
  methods:{
    ...mapActions([
      'kullaniciKaydol'
    ]),
    kaydol(){
      if(this.email==='' || this.sifre===''){
        this.hata.durum = true;
        this.hata.mesaj = 'Lütfen tüm alanları doldurunuz!'
      } else {
        this.kullaniciKaydol({
          email:this.email,
          sifre:this.sifre,
          nickname:this.nickname
        });
      }
    }
  },
}
</script>

<style scoped>
#kaydol{
    height: 100vh;
    background: url('../assets/serve.jpg') no-repeat center top fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    padding-top: 20vh;
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