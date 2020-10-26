<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-12">
        <h4>Post something!</h4>
        <textarea v-model="post" class="form-control" rows="5" autofocus></textarea>
      </div>
      <div class="col-3">
        <div class="form-group">
          <span for="exampleFormControlSelect1">Choose a topic</span>
          <select class="form-control" id="exampleFormControlSelect1" v-model="topic">
            <option value="basketball">Basketball</option>
            <option value="bicycle">Bicycle</option>
            <option value="football">Football</option>
            <option value="hockey">Hockey</option>
            <option value="quidditch">Quidditch</option>
            <option value="skiing">Skiing</option>
            <option value="snowbing">Snowboarding</option>
            <option value="tabtennis">Table Tennis</option>
            <option value="volleyb">Volleyball</option>
          </select>
        </div>
      </div>
      <div class="col-9">
        <button @click="addpost()" class="btn float-right mt-4">Post</button>
      </div>
      <div class="col-12 mt-4" v-if="!posts.length">
        <div class="card">
          <div class="card-body text-center">
            Be first one to post!
          </div>
        </div>
      </div>
      <div class="col-12 mb-5" v-else>
        <h4>Posted Earlier</h4>
          <ul>
            <li v-for="post in posts" :key="post._id">
              <div class="row">
                <div class="col-1">
                  <img :src= "require(`../assets/postimg/${post.topic}.svg`)">
                </div>
                <div class="col-11">
                  <button @click="postDelete(post)" class="btn float-right" id="dltbtn">X</button>
                  {{post.post}}<br>
                  {{post.userInfo[0].nickname}}
              </div>
              </div>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex';

export default {
  name: 'Homepage',
  data () {
    return {
      post: '',
      topic: ''
    }
  },
  mounted(){
    this.postListing();
  },
  computed: {
    ...mapGetters([
      'posts'
    ]),
  },
  methods: {
    ...mapActions([
      'postListing',
      'postDelete'
    ]),
    async addpost(){
      await this.$store.dispatch('postAdding', {post:this.post, topic:this.topic});
      this.post = await ''
    },
  },
}

</script>

<style scoped>

textarea{
  resize: none; 
}
ul{
  margin: 0px;
  padding: 0px;
}
li{
  margin-top: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 10px;
  list-style-type: none;
}
img{
  width: 40px;
  height: 40px;
  float: right;
}
.btn{
  width: 180px;
  color:#812da8;
  border: #812da8 1px solid;
  border-radius: 8px;
  margin-bottom: 10px;
}
.btn:hover{
  background: #812da8;
  color: white;
  font-weight: bold;
}
#dltbtn{
  width: 42px;
  vertical-align: top;
}

</style>
