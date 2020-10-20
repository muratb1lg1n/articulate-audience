<template>
  <div class="container">
      <div class="row">
        <div class="col-12">
          <div>
            <ul>
              <li v-for="post in userPosts" :key="post._id">
                {{post.post}}<br>
                <small><timeago :datetime="post.date"></timeago></small>
              </li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</template>

<script>

import { mapGetters, mapActions} from 'vuex';

export default {
  name: 'ProfilePost',
  mounted(){
    this.userProfilePost();
  },
  computed: {
    ...mapGetters([
      'userPosts'
    ])
  },
  methods: {
    ...mapActions([
      'userProfilePost'
    ])
  },
}
</script>

<style scoped>

ul{
  padding: 0px;
  margin: 0px;
}
li{
  list-style-type: none;
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 10px;
  cursor: pointer;
}
li:hover{
  border: 1px solid #000;
  background-color: #f9f9f9;
}

</style>
