<template>
  <div class="mt-20 flex flex-col  mx-auto" style="max-width: 1200px;">
  <div class=" flex flex-row justify-between w-full" >
      <div class="flex flex-col " style="width: 620px;">
        <div class="font-bold" style="font-size: 41px;">Проверьте штрафы и зарегестрируйтесь в 1 клик</div>
        <div class="mt-5 flex justify-between">
          <div class=" w-80">    
            <div class="text-xs mb-1">Номер автомобиля</div>
            <input class="h-10 w-full pl-2  border-2 rounded-lg" style="border-color: #BCBCBC;" v-model="carNumber"/>

          </div>
          <div class=" w-64">
            <div class=" text-xs mb-1">Регион</div>

          <input class="h-10 w-full pl-2  border-2 rounded-lg" v-model="region" style="border-color: #BCBCBC;"/>
          </div>
        </div>
        <div  class=" mt-3">  
          <div class=" text-xs mb-1">Свидетельство о регистрации ТС</div>

          <input class="h-10 w-full pl-2  border-2 rounded-lg" v-model="certificate" style="border-color: #BCBCBC;"/>

        </div>   
        <div class="w-full mt-5 flex">
          <button class=" rounded-xl  h-10 px-5  bg-primary hover:bg-secondary" style=" color:white">
            Проверить штрафы
            <Icon name="material-symbols-light:arrow-right-alt" size="30px"></Icon>
          </button> 
          <button class="ml-5 h-10 px-5 border-2 rounded-lg   bg-white hover:bg-gray " style="border-color: #0584FE;">    
            <Icon name="ant-design:youtube-outlined"  size="30px" style="color:#1253A2"></Icon>
            О сервисе <span  class=" text-secondary">(1 мин. 20 сек)</span></button> 
        </div>
        <span class=" text-xs mt-4" style="color:#8F8F8F">
          Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту
        </span>
      </div>
      <div>
        <NuxtImg src="/interface.jpg" style="width: 530px;"></NuxtImg>
      </div>
  </div>
  <div class="flex flex-col justify-center mt-20 mb-5">
    <div class=" text-center text-3xl font-bold">Плюсы использования сервиса «Компас» для анализа штрафов</div>
    <div class="mt-10 w-full flex flex-wrap">
      <CardsPlus v-for="card in cards" :iconName="card.iconName" :card-name="card.cardName" :card-info="card.cardInfo"  ></CardsPlus>
    </div>
  </div>
  <div class="flex flex-col justify-center mt-20 mb-5">
    <div class=" text-center text-3xl font-bold">Документы</div>
    <div class="mt-10 w-full flex flex-wrap justify-between">
      <div class="flex flex-col justify-center">
        <div class="flex flex-col justify-center" style="width: 40px;
height: 80px;
border-radius: 0 100% 100% 0 / 0 50% 50% 0;

gap: 0px;
opacity: 0px;
background: #A6B7D478;

">
  <Icon name="ic:baseline-keyboard-arrow-left" size="40px"  style="color:white"></Icon>
      </div>
      </div>
      <CardsDocumet v-for="document in documents" :name="document.name" :text="document.text"
      :link="document.link"
      ></CardsDocumet>
      <div class="flex flex-col justify-center">
      <div class="flex flex-col justify-center" style="width: 40px;
height: 80px;

border-radius:  100% 0 0 100%  /  50% 0 0 50% ;
gap: 0px;
opacity: 0px;
background: #A6B7D478;

">
  <Icon name="ic:baseline-keyboard-arrow-right" size="40px" style="color:white"></Icon>
      </div>
    </div>
    <div class="w-full flex justify-center items-center h-5 mt-3" >
      <div class="h-5 w-5 mx-1" style="  border-radius: 50%; background-color: #0584FE;" ></div>
      <div class="h-2 w-2 mx-1" style="  border-radius: 50%; background-color: #D9D9D9;"></div>
    </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts" setup>


const carNumber = ref('')
const region = ref('')
const certificate = ref('')

const cards = ref([
  {iconName:'mdi:infinity',cardName:'Неограниченый автопарк',
  cardInfo:'Можно добавить неограниченное кол-во машин и водителей'},
  {iconName:'majesticons:map-simple-marker',cardName:'Сокращение затрат до 50%',
  cardInfo:'Максимально быстро узнаете о штрафах в автоматическом режиме, тем самым у вас есть время оплатить по скидке'},
  {iconName:'mdi:shield-check',cardName:'Безопасность',
  cardInfo:'Данные передаются в зашифрованном виде, они доступны только получателю'},
  {iconName:'game-icons:ringing-bell',cardName:'Уведомление о погашении',
  cardInfo:'Мы оповестим вас о том, что штраф был погашен и соответствующая запись создана в ГИС ГМП'},
  {iconName:'mdi:invoice-text-check',cardName:'Квитанция об оплате',
  cardInfo:'После совершения оплаты банковской картой на Вашу электронную почту придет квитанция об успешной оплате.'},
  {iconName:'octicon:history-16',cardName:'Все история сохраняется по каждой машине',
  cardInfo:'Вся история штрафов сохраняется по машине и водителю, позволяет анализировать статистику по штрафам'},
  ])

const documents = ref([{name:'Лицензионный договор',text:'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке.', link:'/document/1'},
{name:'Политика обработки персональных данных',text:'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.', link:'/document/2'},
{name:'Информация об оплате',text:'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.', link:'/document/3'}])
</script>

<style>

</style>