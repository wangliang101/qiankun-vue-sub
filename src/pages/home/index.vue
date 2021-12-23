<template>
  <div>
    <div class='sub_wrap'>vue-sub home</div>
    <div>主应用数据:{{text.value}}</div>
    <div><button @click='changeGlobalData'>修改主应用数据</button></div>
  </div>
</template>

<script>
import { onMounted, getCurrentInstance, ref } from 'vue';

export default {
  name: "Home",
  setup (){
    const { proxy } = getCurrentInstance();
    let text = ref({})
    const changeGlobalData = () => {
      proxy.$setGlobalState && proxy.$setGlobalState({
        value: 'react-sub change data'
      })
    }

    onMounted(() => {
      proxy.$onGlobalStateChange && proxy.$onGlobalStateChange((state) => {
      text.value = state
    })
    })

    return {
      changeGlobalData,
      text
    }
  },
  
}
</script>

<style scoped>
.sub_wrap{
  display: flex;
  flex-direction: column;
}
</style>>
