<template>
  <div class=" max-w-7xl m-auto">
    <div class="flex w-1/2 justify-between mt-5">
      <div class="flex items-center">
        <div class="flex items-center">
          <div class="text-sm">{{ linkHistory[0] }}</div> 
          <div class="pointer"></div>  
        </div>    
        <div class="flex items-center  ">
          <div class="text-sm">{{ linkHistory[1] }}</div> 
          <div class="pointer"></div>  
        </div> 
        <div class="flex items-center ">
          <div class="text-sm text-gray">{{ linkHistory[2] }}</div> 
  
        </div> 
    
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';

interface document {
  name: string;
  text: string;
  id: number;
}


const allDocuments: document[]  = [
    {
        name: "Лицензионный договор",
        text: "Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке.",
        id: 1,
    },
    {
        name: "Политика обработки персональных данных",
        text: "Радиус разброса ПГМ составляет до 3 метров и может регулироваться.",
        id: 2,
    },

    {
        name: "Информация об оплате",
        text: "Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.",
        id: 3,
    },
];
const linkHistory = ref(['Главная страница','Документы']);
const route = useRoute()
const document = ref({})


function  getdocumentName (){
  document.value = allDocuments.filter(obj => obj.id === Number(route.params.id))[0];
  let docData = Object.assign(document.value) 
  linkHistory.value.push(docData.name)
  console.log(linkHistory.value)
}

onMounted(() => {
  getdocumentName()
});
</script>

<style scoped>
.pointer{
  height: 5px;
  width: 5px;
  background: black;
  border-radius: 50%;
  margin: 0px 20px;
}
</style>