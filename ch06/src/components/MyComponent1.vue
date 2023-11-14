<script setup>
import { useMainStore } from '../store/mainStore';
import {computed} from "@vue/reactivity";

//전역스토어 가져오기
const mainStore = useMainStore();

// 전역 스토어 getters 실행
const count1 = mainStore.doubleCount;
const count2 = computed(()=>mainStore.doubleCount);

// 전역 스토어 actions 실행
const btnIncrement = ()=>{
    mainStore.increment();
}
const btnDecrement = ()=>{
    mainStore.decrement();
}
</script>

<template>
    <h4>MyComponent1</h4>
    <p>
        mainStore count1 : {{ count1 }}<br/>
        mainStore count2 : {{ count2 }}<br/>
    </p>

    <button @click="btnIncrement">증가</button>
    <button @click="btnDecrement">감소</button>
</template>

<style scoped>

</style>