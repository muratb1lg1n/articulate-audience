<template>
  <div class="container col-9">
      <div class="col-9">
        <div id="paylasimlist">
          <ul>
            <li v-for="paylasim in paylasimlar" :key="paylasim._id" id="paylasimel">
              <p>{{paylasim.icerik}}</p>
            </li>
          </ul>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex';

export default {
  name: 'ProfilPaylasim',
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
      'paylasimListele'
    ])
  },
}
</script>

<style scoped>

.container{
  float: right;
  height: 390px;
  overflow: scroll;
}
#paylasimel{
  list-style: none;
}
p{
  border: 1px solid gray;
  border-radius: 3px;
  padding: 3px 1px 2px 13px;
}

</style>
