<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card text-center w-50">
          <div class="card-body">
            <h5 class="card-title">404</h5>
            <p class="card-text">Sorry, page you're looking for is not found.</p>
            <router-link to="/">
              <button class="btn" style="float: center;">
                Go back to the homepage!
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: 'NotFound',
}

</script>

<style scoped>

.card{
  top: 13rem;
  left: 16.8rem;
}
.btn{
  width: 180px;
  color:#812da8;
  border: #812da8 1px solid;
  border-radius: 8px;
  margin-bottom: 10px;
  text-align: center;
}
.btn:hover{
  background: #812da8;
  color: white;
  font-weight: bold;
}

</style>
