<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-3">
        <div id="circle"></div>
        <div id="username">@{{user.nickname}}</div>
      </div>
      <div class="col-7" id="profiledetail">
        <div v-show="!enterdes">{{user.description}}</div>
        <textarea class="form-control" v-model="description" v-show="enterdes" :placeholder="user.description" rows="5"></textarea>
      </div>
       <div class="col-2">
        <button @click="enterdes = true" class="btn float-right" v-show="!enterdes">Edit Description</button>
        <button @click="descriptionUpdate(description)" class="btn float-right" v-show="enterdes">Save</button>
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
    }
  },
  mounted(){
    this.userProfile();
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
      'descriptionUpdate'
    ])
  },
}

</script>

<style scoped>

#circle{
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: grey;
  margin: 0 auto;
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

</style>
