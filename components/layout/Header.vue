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
            <div
                class="flex items-center relative h-full mx-auto w-5/6 justify-between"
                style="max-width: 1200px; width: 100%"
            >
                <div class="flex items-center cursor-pointer pl-2">
                    <NuxtLink to="/">
                        <NuxtImg style="min-width: 75px; width: 120px" src="/logo.jpg" alt="compas logo" />
                    </NuxtLink>

                    <div v-for="link in links" class="dop_info">
                        {{ link }}
                    </div>
                </div>

                <div class="flex items-center justify-end">
                    <div class="px-3 text-sm mobile:text-xs text-white">+7 495 118-44-22</div>
                    <div class="px-3">
                        <button class="text-white bg-black hover:bg-gray text-sm">Вход</button>
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

<style scoped>
.dop_info {
    display: none;
    padding: 0px 12px;
    color: white;
    font-size: 12px;
}
@media (min-width: 800px) {
    .dop_info {
        display: block;
    }
}
</style>
