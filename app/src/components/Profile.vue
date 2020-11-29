<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-3 text-center">
        <div v-if="!other">
          <div v-if="user.photo==null">
            <input type='file' accept="image/jpeg, image/png, image/gif" class="inputFile" ref="file" @change="photo" name="photo" id="photo">
            <label for="photo"><i class="fas fa-user-circle circle"></i></label>
          </div>
          <div v-else>
            <input type='file' accept="image/jpeg, image/png, image/gif" class="inputFile" ref="file" @change="photo" name="photo" id="photo">
            <label for="photo">
              <img class="userPhoto" :src="'http://localhost:3000/userPhotos/'+user.photo">
            </label>
          </div>
        </div>
        <div v-else>
          <label for="photo">
            <img class="userPhoto" :src="'http://localhost:3000/userPhotos/'+otherProfile.photo">
          </label>
        </div>
        <div id="username" v-if="!other">@{{user.nickname}}</div>
        <div id="username" v-else>@{{otherProfile.nickname}}</div>
      </div>
      <div class="col-7" id="profiledetail" v-if="!other">
        <div v-if="!enterdes">{{user.description}}</div>
        <textarea class="form-control" v-model="description" v-else rows="5"></textarea>
      </div>
      <div class="col-7" id="profiledetail" v-else>
        <div v-if="!enterdes">{{otherProfile.description}}</div>
        <textarea class="form-control" v-model="description" v-else rows="5"></textarea>
      </div>
       <div class="col-2" v-show="!other">
        <button @click="enterdes = true" class="btn float-right" v-show="!enterdes">Edit Description</button>
        <button @click="descriptionUpdateOne()" class="btn float-right" v-show="enterdes">Save</button>
        <button @click="enterdes = false" class="btn float-right" v-show="enterdes">Cancel</button>
        <button @click="userLogout" class="btn float-right" id="extbtn">Logout</button>
      </div>
    </div>
    <hr id="line">
    <div class="row" v-if="!other">
      <div class="col-12">
        <h3>My Posts</h3>
      </div>
      <div class="col-12">
        <ul class="user-posts">
          <li v-for="post in userPosts" :key="post._id">
            <span v-if="!post.photo">
              <strong>{{user.nickname}}</strong> - {{post.date | moment("from")}}<br>
              {{post.post}}
            </span>
            <span v-else>
              {{user.nickname}} - {{post.date | moment("from")}}
              <p>
                <img :src="'http://localhost:3000/postPhotos/'+post.photo">
              </p>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col-12">
        <h3>{{otherProfile.nickname}}'s Posts</h3>
      </div>
      <div class="col-12">
        <ul class="user-posts">
          <li v-for="post in otherPosts" :key="post._id">
            <span v-if="!post.photo">
              <strong>{{otherProfile.nickname}}</strong> - {{post.date | moment("from")}}<br>
              {{post.post}}
            </span>
            <span v-else>
              <strong>{{otherProfile.nickname}}</strong> - {{post.date | moment("from")}}
              <p>
                <img :src="'http://localhost:3000/postPhotos/'+post.photo">
              </p>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex';

export default {
  name: 'Profile',
  data () {
    return {
      other: false,
      otherNickName: null,
      description: '',
      enterdes: false,
      photoFile: new FormData()
    }
  },
  async mounted(){
    await this.userProfile();
    await this.userProfilePost();
    if(this.user.nickname !== this.$route.params.nickname){
      this.other = true;
      this.otherNickName = this.$route.params.nickname;
      this.otherProfileGet(this.$route.params.nickname);
      this.otherPostListing(this.$route.params.nickname);
    }
  },
  computed: {
    ...mapGetters([
      'user',
      'userPosts',
      'otherProfile',
      'otherPosts'
    ])
  },
  methods: {
    ...mapActions([
      'userLogout',
      'userProfile',
      'photoUpdate',
      'userProfilePost',
      'otherPostListing',
      'otherProfileGet'
    ]),
    async descriptionUpdateOne(){
      await this.$store.dispatch('descriptionUpdate',this.description);
      this.enterdes = await !this.enterdes;
      await this.userProfile();
    },
    async photo(){
      await this.photoFile.append('userPhoto',this.$refs.file.files[0])
      await this.$store.dispatch('photoUpdate',this.photoFile);
      await this.userProfile();
    }
  },
}

</script>

<style scoped>
h3{
  color: #812da8;
}
.circle{
  font-size: 12.5em !important;
  cursor: pointer;
}
#username{
  text-align: center;
  margin-top: 7px;
}
#profiledetail{
  float: right;
  max-width: 700px;
}
textarea{
  resize: none;
}
#line{
  margin-top: 10px;
  background-color: #812da8;
  height: 1px;
}
ul{
  margin-bottom: 0;
  left: 20px;
}
li{
  list-style: none;
  margin-top: 40px;
  text-align: center;
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
#extbtn{
  background: #812da8;
  color: white;
}
.inputFile{
  width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}
.userPhoto{
  cursor: pointer;
  width: 200px;
  height: 200px;
  border-radius: 100px;
  border: 9px solid #812da8;
  background-color: #000;
  position: relative;
}
.userPhoto:hover{
  background-color: #000;
  opacity: 0.5;
}

.user-posts {
  padding: 0px !important;
  margin: 0px 0px 50px 0px !important;
}
.user-posts li{
  list-style-type: none !important;
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin-top: 15px !important;
  padding: 10px;
  cursor: pointer;
  text-align: left;
}
.user-posts li:hover{
  border: 1px solid #000;
  background-color: #f9f9f9;
}

</style>
