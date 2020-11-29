<template>
  <div id="signup">
    <div class="container">
      <div class="row ">
        <div class="col-12">
          <h1>Signup</h1>
          <div v-show="err.showdes" class="alert alert-danger" role="alert">
            {{err.showdes}}
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
          <input type="text" class="form-control" v-model="nickname" placeholder="Nickname">
        </div>
        <div class="col-12">
          <button class="btn btn-success btn-block" @click="signup()">Sign Up</button>
        </div>
        <div class="col-12 mt-3" style="text-align: center;">
          Already have an account? <router-link to="/login">Log in!</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex';
export default {
  name: 'Signup',
  data () {
    return {
      email: '',
      password: '',
      nickname: '',
      err:{
        showdes: false,
        msg: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'error'
    ])
  },
  methods:{
    ...mapActions([
      'userSignup'
    ]),
    signup(){
      if(this.email==='' || this.password===''){
        this.err.showdes = true;
        this.err.msg = 'Please fill all the fields!'
      } else {
        this.userSignup({
          email: this.email,
          password: this.password,
          nickname: this.nickname
        });
      }
    }
  },
}
</script>

<style scoped>
#signup{
    height: 100vh;
    background: url('../assets/serve.jpg') no-repeat center top fixed; 
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