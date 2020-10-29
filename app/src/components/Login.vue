<template>
  <div id="login" v-show="loaded">
    <div class="container mt-5">
      <div class="row">
        <div class="col-12">
          <h1>Login</h1>
          <div v-show="err.show" class="alert alert-danger" role="alert">
            {{err.msg}}
          </div>
          <div v-show="error" class="alert alert-danger" role="alert">
            {{error}}
          </div>
        </div>
        <div class="col-12">
          <input type="text" class="form-control" v-model="email" placeholder="Email">
        </div>
        <div class="col-12">
          <input type="text" class="form-control" v-model="password" placeholder="Password">
        </div>
        <div class="col-12">
          <button class="btn btn-success btn-block" @click="login()">Login</button>
        </div>
        <div class="col-12 mt-3 text-center">
          If you don't have account, <router-link to="/signup">Create One!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex';

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      err:{
        show: false,
        msg: ''
      },
      loaded: false
    }
  },
  computed: {
    ...mapGetters([
      'error',
      'user'
    ])
  },
  methods: {
    ...mapActions([
      'userLogin'
    ]),
    login(){
      if(this.email==='' || this.password===''){
        this.err.show = true;
        this.err.msg = 'Please fill all the fields!'
      } else {
        this.userLogin({'email':this.email,'password':this.password})
      }
    }
  },
  mounted(){
    this.loaded = true;
  }
}

</script>

<style scoped>

  #login{
    height: 100vh;
    background: url('../assets/peloton.jpg') no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    padding-top: 20vh;
  }
  .container{
    max-width: 500px;
    background-color: #ffffff;
    border-radius: 20px;
    padding: 50px 30px 70px 30px;
  }
  input{
    margin-bottom: 10px;
  }

</style>
