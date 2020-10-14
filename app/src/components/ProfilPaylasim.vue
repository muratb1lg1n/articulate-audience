<template>
  <div class="container">
      <div class="row">
        <div class="col-12">
          <div id="paylasimlist">
            <ul>
              <li v-for="paylasim in kullaniciPaylasimlar" :key="paylasim._id">
                {{paylasim.icerik}}<br>
                <small><timeago :datetime="paylasim.tarih"></timeago></small>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';

export default {
  name: 'ProfilPaylasim',
  mounted(){
    this.kullaniciProfilPaylasim();
  },
  computed: {
    ...mapGetters([
      'kullaniciPaylasimlar'
    ])
  },
  methods: {
    ...mapActions([
      'kullaniciProfilPaylasim'
    ])
  },
}
</script>

<style scoped>
ul{
  padding: 0px;
  margin: 0px;
}
li{
  list-style-type: none;
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
}
li:hover{
  border: 1px solid #000;
  background-color: #f9f9f9;
}
</style>
