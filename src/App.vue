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
import { getCurrentInstance } from 'vue';
export default {
  name: 'App',
  setup(){
    const { proxy } = getCurrentInstance();
    // 不能使用ctx,在生产环境会拿不到
    // 此处时主要为了测试instance.config.globalProperties在main的哪个位置挂载，此处可以拿到挂载值
    console.log('proxy', proxy.$setGlobalState)
  },
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
