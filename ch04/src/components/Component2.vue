<script>
import {
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
    ref
} from "vue";
    export default {
        name: "Component2",
        setup() {
            const count = ref(0);
            const btnAdd = ()=> {
                count.value++;
            };
            onBeforeMount(() => {
                console.log('onBeforeMount...');
            });
            onMounted(() => {
                console.log('onMounted...');
            });
            onBeforeUpdate(() => {
                console.log('onBeforeUpdate...');
            });
            onUpdated(() => {
                console.log('onUpdated...');
            });
            onBeforeUnmount(() => {
                console.log('onBeforeUnmount...');
            });
            onUnmounted(() => {
                console.log('onUnmounted...');
            });
            return{
                count,
                btnAdd,
                onBeforeMount,
                onMounted,
                onBeforeUpdate,
                onUpdated,
                onBeforeUnmount,
                onUnmounted
            };
        },
    };
</script>

<template>
    <h4>Component2</h4>
    <p>
        count : {{ count }}
        <button @click="btnAdd">증가</button>
    </p>

</template>

<style scoped>

</style>
