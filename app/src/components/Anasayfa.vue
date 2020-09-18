<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-12">
        <h1>Hoşgeldiniz</h1>
      </div>
      <div class="col-12">
        <ul>
          <li v-for="item in sehirler" :key="item">{{item}}</li>
        </ul>
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
      sehirler:[]
    }
  },
  mounted () {
    axios.get("http://localhost:3000/sehirler")
    .then(veri => (this.sehirler = veri.data.citys))
    .catch(error => {
    });
  }
}
</script>

<style scoped>
</style>
