<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light"  style="background-color: #4C9900;">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/"><font-awesome-icon icon='bicycle' /></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Anasayfa</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Paylasimlar</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/">Etkinlikler</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/giris">Giris Yap</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>

