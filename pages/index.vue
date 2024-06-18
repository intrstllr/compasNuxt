<template>
  <div class=" flex flex-row mx-auto justify-between mt-20"style="max-width: 1170px;" >
      <div class="flex flex-col " style="width: 620px;">
        <div class="font-bold" style="font-size: 41px;">Проверьте штрафы и зарегестрируйтесь в 1 клик</div>
        <div class="mt-5 flex justify-between">
          <div class=" w-80">    
            <div class=" text-xs">Номер автомобиля</div>
       
            <!-- <UInput v-model="carNumber" size="xl"  /> -->
          </div>
          <div class=" w-72">
            <div class=" text-xs">Регион</div>
          <!-- <UInput v-model="region" size="xl" /> -->
   
          </div>
        </div>
        <div  class=" mt-3">  
          <div class=" text-xs">Свидетельство о регистрации ТС</div>
          <!-- <UInput v-model="certificate"  size="xl"/> -->

        </div>   
        <div class="w-full mt-5 flex">
          <!-- <UButton  icon="material-symbols:arrow-right-alt" color="blue" size="xl"  label="Проверить штрафы" trailing></UButton>
          <UButton :trailing="false" class="ml-5" variant="solid" label="О сервисе (1 мин. 20 сек)" color="white"  size="xl"  icon="i-youtube-outline">
 
          </UButton> -->
        </div>
      </div>
      <div>
        <NuxtImg src="/interface.jpg" style="width: 530px;"></NuxtImg>
      </div>
  </div>
</template>

<script lang="ts" setup>


const carNumber = ref('')
const region = ref('')
const certificate = ref('')

</script>

<style>

</style>