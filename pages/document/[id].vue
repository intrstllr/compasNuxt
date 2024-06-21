<template>
    <div class="max-w-7xl m-auto">
        <div class="flex w-1/2 justify-between mt-5">
            <div class="flex items-center">
                <div class="flex items-center" v-for="(link, key) in linkHistory">
                    <div class="text-sm" :class="key == linkHistory.length - 1 ? ` text-gray` : null">
                        {{ link }}
                    </div>
                    <div class="pointer" v-if="key != linkHistory.length - 1"></div>
                </div>
            </div>
        </div>
        <div class="my-8 text-5xl font-bold">{{ document.name }}</div>
        <div>
            <div v-for="(heading, key) in 3" class="mt-5">
                <div class="text-5xl font-bold">Заголовок {{ key + 1 }}</div>
                <div v-if="key % 2 == 0" class="mt-4">
                    Представленная тележка-дозатор обеспечивает высококачественную обработку любых территорий
                    сыпучими противогололедными реагентами самых разных типов, включая такие тяжелые, как
                    гранитная и мраморная крошка, песок и пескосоляные смеси. Тележка прекрасно подходит для
                    использования во дворах многоквартирных домов, обработки территорий промышленных
                    предприятий, востребована владельцами магазинов, различных коммерческих компаний. Кроме
                    того, она может использоваться для высева семян на газонах, теннисных кортах и других
                    территориях.
                </div>
                <div class="mt-4">
                    Представленная тележка-дозатор обеспечивает высококачественную обработку любых территорий
                    сыпучими противогололедными реагентами самых разных типов, включая такие тяжелые, как
                    гранитная и мраморная крошка, песок и пескосоляные смеси.
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";

interface document {
    name: string;
    text: string;
    id: number;
}

const allDocuments: document[] = [
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
const linkHistory = ref(["Главная страница", "Документы"]);
const route = useRoute();
const document = ref({ name: "" });

function getdocumentName() {
    document.value = allDocuments.filter((obj) => obj.id === Number(route.params.id))[0];
    let docData = Object.assign(document.value);
    linkHistory.value.push(docData.name);
}

onMounted(() => {
    getdocumentName();
});
</script>

<style scoped>
.pointer {
    height: 5px;
    width: 5px;
    background: black;
    border-radius: 50%;
    margin: 0px 15px;
}
</style>
