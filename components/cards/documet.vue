<template>
  <div class="flex flex-col px-4" style="height: 450px; width: 340px; background-color: #FFFFFF; border-radius: 10px; 
 border-width: 1px; box-shadow: 0px 0px 20px 0px #0000001F;
">
      <div class=" py-5 pr-5 font-bold text-3xl" style="color:#1253A2">{{ props.name }}</div>
      <div style="flex: 1 1 auto; font-size: 18px;">
        {{ props.text }}
      </div>
      <div class="px-4 py-3 text-sm text-white">
        <nuxt-link  :to="{ path: props.link   }">
          <button class=" rounded-xl  h-10 px-5 w-full  bg-primary hover:bg-secondary">Перейти</button> 
        </nuxt-link>
        </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
    name:{type:String , required:true},
    text:{type:String , required:true},
    link:{type:String , required:true},

})
</script>

<style>

</style>