<script lang="ts">
import { defineComponent, reactive, toRef } from "vue";

export default defineComponent({
    setup() {
        function close() {}
    },
});

const emit = defineEmits<{
    close: [];
}>();
</script>

<template>
    <div class="simple-modal">
        <div class="simple-modal-backdrop">
            <div class="simple-modal-container">
                <div class="simple-modal-content">
                    <header class="simple-modal-header">
                        <Icon
                            @click=""
                            name="material-symbols:close-rounded"
                            size="30px"
                            style="color: black; cursor: pointer"
                        ></Icon>
                    </header>
                    <section class="simple-modal-body">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/OPGXtL_si1g?si=JAOYgGasytV2h4wF"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerpolicy="strict-origin-when-cross-origin"
                            allowfullscreen
                        ></iframe>
                    </section>
                    <footer class="simple-modal-footer">
                        <slot name="footer" />
                    </footer>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.simple-modal {
    &-backdrop {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        transition: opacity 0.3s ease;
        z-index: 9999;
    }

    &-container {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        width: auto;
        margin: 16px;
        display: flex;
        justify-content: center;
    }
    &-header {
        display: flex;
        justify-content: end;
    }
    &-footer {
        height: 30px;
    }
    &-body {
        display: flex;
        justify-content: center;
    }
    &-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        max-width: 620px;
        margin: auto;
        padding: 5px 5px;
        border-radius: 5px;
        color: #000;
        background-color: #fff;
        transform: translate(0, 0);
        transition: all 0.3s ease;
        box-sizing: border-box;
    }
}
</style>
