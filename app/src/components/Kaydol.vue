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
        <button class="btn btn-success btn-block" @click="kaydol()">Giriş</button>
      </div>
    </div>
  </div>
</template>

<script>
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
        this.$router.push('/anasayfa');
      }
    }
  }
}
</script>