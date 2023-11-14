<script setup>
import {reactive} from "vue";
import {useRoute} from "vue-router";

// router 인스턴스 가져오기
const router = useRoute();

// router query 데이터 수신
const user = router.query;
</script>
<template>
    <h4>FormResult1</h4>

    <p>
        name : {{ user.name }}
        age : {{ user.age }}
        addr : {{ user.addr }}
    </p>
</template>
<style scoped></style>