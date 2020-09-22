<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-12">
        <h4>Bir Şeyler Paylaş!</h4>
        <textarea v-model="icerik" class="form-control" rows="5"></textarea>
        <button class="btn btn-success btn-lg float-right mt-4">Gönder</button>
      </div>
      <div class="col-12">
        <h4>Bugün Paylaşılanlar</h4>
        <div class="card mt-2">
          <div class="card-body">
            <ul>
              <li v-for="veri in veriler" :key="veri">{{veri}}</li>
            </ul>
          </div>
        </div>
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
      icerik:''
    }
  },
  mounted () {
    axios.post("http://localhost:3000/paylasim",{icerik:icerik})
    .then(res=>{

    })
    .catch(err => {

    });
  }
}
</script>

<style scoped>
</style>
