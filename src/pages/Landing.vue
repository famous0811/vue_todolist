<template>
  <div class="home">
    <input type="text" v-model="text" @keyup.enter="updateTodo" />
    <button @click="updateTodo">추가</button>
    <ul>
      <li v-for="data in todos" :key="data">{{ data }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  data() {
    return {
      text: "ㅅㄷㄴㅅ",
      todos: [],
    };
  },
  methods: {
    updateTodo() {
      this.todos.push(this.text);
      this.text = "";
    },
  },
  // created() {
  //   // alert("test");
  // },
})
export default class Landing extends Vue {}
</script>

<style lang="scss"></style>
