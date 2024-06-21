<template>
    <div class="w-full mx-auto">
        <div class="flex items-center mt-5">
            <NuxtLink to="/" class="text-sm">Главная страница</NuxtLink>
            <div class="pointer"></div>
            <div class="text-sm text-gray">Документы</div>
        </div>
        <div class="w-full mt-5">
            <div class="mx-auto text-5xl font-bold" style="max-width: 400px">Ваши документа</div>
        </div>
        <div class="mt-10 pb-5">
            <swiper :navigation="true" :modules="modules" :slides-per-view="3">
                <swiper-slide v-for="document in documents">
                    <CardsDocument
                        :name="document.name"
                        :text="document.text"
                        :id="document.id"
                    ></CardsDocument>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const modules = [Navigation];

const documents = ref([
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
]);
</script>

<style>
.pointer {
    height: 5px;
    width: 5px;
    background: black;
    border-radius: 50%;
    margin: 0px 15px;
}
</style>
