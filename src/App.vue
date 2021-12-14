<template>
  <div class="app_vue_sub">
    <header class="app_vue_sub_header">
      <router-link class="button" to="/">HOME</router-link>
      <router-link class="button" to="/about">ABOUT</router-link>
    </header>
    <div class="app_vue_sub_body">
      <router-view/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  
}
</script>

<style>
.app_vue_sub{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.app_vue_sub_header{
  height: 100px;
  line-height: 100px;
  display: flex;
  justify-content: center;
}

.button:nth-child(1){
  margin-right: 50px;
}

.app_vue_sub_body{
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: peru;
  font-size: 30px;
}
</style>
