<script>
    export default {
        name:"LifeComponent",
        methods: {
            btnAdd:function () {
                this.count++
            }
        },
        data(){
            return{
                count:0,
            }
        },
        // 컴포넌트 라이프 사이클 함수
        beforeCreate:function() {
            console.log("beforeCreate...");
        },
        created:function() {
            console.log("created...");
        },
        beforeMount:function() {
            console.log("beforeMount...");
        },
        mounted:function() {
            console.log("mounted...");
        },
        beforeUpdate:function() {
            console.log("beforeUpdate...");
        },
        updated:function() {
            console.log("updated...");
        },
        beforeUnmount:function() {
            console.log("beforeUnmount...");
        },
        unmounted:function() {
            console.log("unmounted...");
        },
    };
</script>
<template>
    <h4>LifeComponent</h4>
    <p>카운터 : {{ count }}</p>
    <button @click="btnAdd">증가</button>
</template>
<style scoped></style>