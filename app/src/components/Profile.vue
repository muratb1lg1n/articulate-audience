<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-3 text-center">
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
        <div id="username">@{{user.nickname}}</div>
      </div>
      <div class="col-7" id="profiledetail">
        <div v-if="!enterdes">{{user.description}}</div>
        <textarea class="form-control" v-model="description" v-else rows="5"></textarea>
      </div>
       <div class="col-2">
        <button @click="enterdes = true" class="btn float-right" v-show="!enterdes">Edit Description</button>
        <button @click="descriptionUpdateOne()" class="btn float-right" v-show="enterdes">Save</button>
        <button @click="enterdes = false" class="btn float-right" v-show="enterdes">Cancel</button>
        <button @click="userLogout" class="btn float-right" id="extbtn">Logout</button>
      </div>
    </div>
    <hr id="line">
    <div class="row">
      <div class="col-3">
        <ul>
          <li><router-link class="btn" to="/profile">My Posts</router-link></li>
        </ul>
      </div>
      <div class="col-9">
        <router-view/>
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
      description: '',
      enterdes: false,
      photoFile: new FormData()
    }
  },
  async mounted(){
    await this.userProfile();
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  methods: {
    ...mapActions([
      'userLogout',
      'userProfile',
      'photoUpdate'
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
.circle{
  font-size: 8em !important;
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
  border: 10px solid #e1e1e1;
  background-color: #000;
  position: relative;
}
.userPhoto:hover{
  background-color: #000;
  opacity: 0.5;
}

</style>
