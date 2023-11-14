import { defineStore } from "pinia";

// Pinia 전역 스토어 생성 후 내보내기
export const useMainStore = defineStore("main", {
  /* 
    state
        - store에서 관리하는 상태 선언 속성
        - 해당 store에서 관리하는 상태값 집합
        - 화살표 함수로 정의
    */
  state: ()=>{
    return {
        title: "Hello Pinia!",
        count:0,
        cities: ["서울", "대전", "대구", "부산", "광주"],
        persons: [
            {uid:"a101", name:"김유신", age:23},
            {uid:"a102", name:"김춘추", age:21},
            {uid:"a103", name:"장보고", age:33},
            {uid:"a104", name:"강감찬", age:43},
            {uid:"a105", name:"이순신", age:53},
        ],
    };
  },
  /* 
    actions(==setter)
        - store의 state를 변경할 때 사용하는 속성
        - 비동기 처리로 직접 state 제어
    */
  actions: {
    increment(){
        this.count++;
    },
    decrement(){
        this.count--;
    },
  },
    /* 
    getters
        - state를 반환하는 속성
    */
  getters: {
    doubleCount: (state)=> {
        return state.count * 2;
    },
  },
});