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
      <div class="col-3">
        <input type='file' accept="image/jpeg, image/png, image/gif" class="inputFile" ref="file" @change="addPhoto" name="photo" id="photo">
        <label class="photoBtn mt-4" for="photo">
          <i class="fas fa-image"></i>
          <span v-if="photoName">{{photoName.substring(0,20)}} ..</span>
          <span v-else>Add Photo</span>
        </label>
      </div>
      <div class="col-6">
        <button @click="addpost()" class="btn float-right mt-4">Post</button>
      </div>
      <div class="col-12 mt-4" v-if="!posts.length">
        <div class="card">
          <div class="card-body text-center">
            Be first one to post!
          </div>
        </div>
      </div>
      <div class="col-12 mb-5 mt-3" v-else>
        <hr>
        <h4 class="mb-5">Posted Earlier</h4>
          <ul class="posts">
            <li v-for="post in posts" :key="post._id">
              <div class="row">
                <div class="col-1">
                  <img :src= "require(`../assets/postimg/${post.topic}.svg`)">
                </div>
                <div class="col-11" v-if="!post.photo">
                  <button v-show="user.nickname==post.userInfo[0].nickname" @click="postDelete(post)" class="btn float-right" id="dltbtn">X</button>
                  <strong>{{post.userInfo[0].nickname}}</strong> - {{post.date | moment("from")}}<br>
                  {{post.post}}
                </div>
                <div class="col-11 py-3" v-else>
                  <button v-show="user.nickname==post.userInfo[0].nickname" @click="postDelete(post)" class="btn float-right" id="dltbtn">X</button>
                  {{post.userInfo[0].nickname}} - {{post.date | moment("from")}}
                  <p>
                    <img :src="'http://localhost:3000/postPhotos/'+post.photo">
                  </p>
                  <p>
                    {{post.post}}
                  </p>
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
      topic: '',
      formData: new FormData(),
      photoName: ''
    }
  },
  async mounted(){
    await this.userProfile();
    await this.postListing();
  },
  computed: {
    ...mapGetters([
      'user',
      'posts'
    ]),
  },
  methods: {
    ...mapActions([
      'userProfile',
      'postListing',
      'postDelete',
      'postAdding'
    ]),
    async addpost(){
      if(this.photoName!==''){
        await this.formData.append('photoCheck',true);
      }
      await this.formData.append('post',this.post);
      await this.formData.append('topic',this.topic);
      await this.postAdding(this.formData);
      this.post = await '';
      this.topic = await '';
      this.photoName = await '';
      await this.formData.delete('post');
      await this.formData.delete('topic');
      await this.formData.delete('photo');
      await this.formData.delete('photoCheck'); 
    },
    async addPhoto(){
      await this.formData.append('photo',this.$refs.file.files[0]);
      this.photoName = await this.$refs.file.files[0].name;
    }
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
.inputFile{
  width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}
.photoBtn{
  cursor: pointer;
  border: 1px solid #ced4da;
  border-radius: 5px;
  padding: 7px 10px 7px 10px;
}
.posts img{
  float: left;
  width: 100%;
  height: 90%;
  border-radius: 5px;
  margin: 20px 0px 20px 0px;
}
</style>
