<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-12">
        <h4>Post something!</h4>
        <textarea v-model="post" class="form-control" rows="5"></textarea>
        <button @click="postAdding(post)" class="btn float-right mt-4">Post</button>
      </div>
      <div class="col-12 mt-4" v-if="!posts.length">
        <div class="card">
          <div class="card-body text-center">
            No post!
          </div>
        </div>
      </div>
      <div class="col-12 mb-5" v-else>
        <h4>Posted Earlier</h4>
          <ul>
            <li v-for="post in posts" :key="post._id">
              <button @click="postDelete(post)" class="btn float-right" id="dltbtn">X</button>
              {{post.post}}<br>
              {{post.userInfo[0].nickname}}
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
      post:''
    }
  },
  mounted(){
    this.postListing();
  },
  computed: {
    ...mapGetters([
      'posts'
    ])
  },
  methods: {
    ...mapActions([
      'postListing',
      'postAdding',
      'postDelete'
    ])
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
