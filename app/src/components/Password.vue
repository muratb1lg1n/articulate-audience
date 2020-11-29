<template>
  <div id="login" v-show="loaded">
    <div class="container mt-5">
      <div class="row">
        <div class="col-12">
          <h1>New Password</h1>
          <div v-show="err.show" class="alert alert-danger" role="alert">
            {{err.msg}}
          </div>
          <div v-show="error" class="alert alert-danger" role="alert">
            {{error}}
          </div>
        </div>
        <div class="col-12">
          <input type="text" class="form-control" v-model="password" placeholder="Password">
          <input type="text" class="form-control" v-model="password2" placeholder="Again Password">
        </div>
        <div class="col-12">
          <button class="btn btn-success btn-block" @click="change()">Create</button>
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
  name: 'Reset',
  data () {
    return {
      password: '',
      password2: '',
      token: this.$route.params.token,
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
      'userPassword'
    ]),
    change(){
      if(this.password!==this.password2){
        this.err.show = true;
        this.err.msg = 'Şifreler eşit değil!'
      } else {
        this.userPassword({'password':this.password, 'token':this.token})
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
