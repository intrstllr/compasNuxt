<template>
    <div
        class="w-96 flex items-center justify-center max-h-64 min-h-40 mx-2 mt-5"
        style="background-color: #fbfcfd; border-radius: 10px; border-color: #eeeff1; border-width: 2px"
    >
        <div class="px-4">
            <Icon :name="props.iconName" size="60px" style="color: #1253a2"></Icon>
        </div>
        <div class="flex flex-col">
            <div class="text-lg font-bold pb-4" style="color: #1253a2">{{ props.cardName }}</div>
            <div class="pb-3" style="font-size: 15px; font-weight: 400; line-height: 18px">
                {{ props.cardInfo }}
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    iconName: { type: String, required: true },
    cardName: { type: String, required: true },
    cardInfo: { type: String, required: true },
});
</script>

<style></style>
