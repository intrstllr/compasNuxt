<template>
<header class="sticky flex items-center" style="z-index: 99; height: 60px;">
    <div class="w-full h-full bg-black " style="box-shadow: 0px 4px 24px rgb(219, 246, 253, 0.41);">
        <div class="flex items-center relative h-full mx-auto  " style="max-width: 1170px;">
        <div class="flex items-center w-1/2">
            <NuxtImg style="width: 120px;" src="/logo.jpg"
                alt="compas logo"/>
                <div v-for="link in links" class="px-3 text-sm text-white">{{ 
            link
                 }}</div>
        </div>

        <div class="flex items-center w-1/2 justify-end">
            <div class="px-3 text-sm text-white">
                +7 495 118-44-22
            </div>
            <div class="px-3 text-sm text-white">
                <!-- <Button variant="link" class=" text-white">Вход</Button>  -->
            </div>
            <div class="px-3 text-sm text-white">
                <!-- <Button class="rounded bg-sky-500 h-10">Регистрация</Button>  -->
            </div>
            </div>
        </div>
    </div>
</header>
</template>

<script lang="ts" setup>

const links:String[] =['Тарифы','Контакты']
</script>

<style></style>