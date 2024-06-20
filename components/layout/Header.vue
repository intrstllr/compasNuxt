<template>
    <header class="sticky flex items-center" style="z-index: 99; height: 60px">
        <div
            class="w-full h-full fixed"
            style="
                max-height: 60px;
                box-shadow: 0px 4px 24px rgb(219, 246, 253, 0.41);
                background: linear-gradient(#000000 100%, #1c2734 100%);
            "
        >
            <div class="flex items-center relative h-full mx-auto" style="max-width: 1200px">
                <div class="flex items-center w-1/2 cursor-pointer" to="/index">
                    <NuxtImg style="width: 120px" src="/logo.jpg" alt="compas logo" />
                    <div v-for="link in links" class="px-3 text-sm text-white">{{ link }}</div>
                </div>

                <div class="flex items-center w-1/2 justify-end">
                    <div class="px-3 text-sm text-white">+7 495 118-44-22</div>
                    <div class="px-3 text-sm text-white">
                        <button class="text-white bg-black hover:bg-gray">Вход</button>
                    </div>
                    <div class="px-3 text-sm text-white">
                        <button class="rounded-xl h-10 px-5 bg-primary hover:bg-secondary">
                            Регистрация
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script lang="ts" setup>
const links: String[] = ["Тарифы", "Контакты"];
</script>

<style></style>
