<template>
  <div class="wrap">
    <h1>ToDoList</h1>
    <div class="todoWrap">
      <input
        type="text"
        v-model="text"
        @keyup.enter="updateTodo"
        class="addtodoText todotitle"
      />
      <button @click="showtest" class="addtodoButton todotitle">추가</button>
    </div>
    <ul class="todos">
      <li v-for="(item, index) in todos" :key="index" class="todoItem">
        <label :style="{ display: 'flex', justifyContent: 'space-between' }">
          <input
            type="checkbox"
            :checked="item.checked"
            @change="clearTodo(index, item.checked)"
          />
          <div class="todotext" :class="{ cleared: item.checked }">
            {{ item.text }}
          </div>
        </label>

        <button @click="delectTodo(item)" class="delectTodo">
          <!-- test<v-icon>mbi-highlight_off</v-icon> -->
          <!-- <v-icon x-large dark>gavel</v-icon> -->
          <!-- <v-icon>fas fa-lock</v-icon> -->
          <v-icon large color="green darken-2">email</v-icon>
          <!-- <v-icon large color="green darken-2"> md-delete_forever </v-icon> -->
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  data() {
    return {
      text: "ㅅㄷㄴㅅ",
      todos: [{ text: "test1", checked: true }],
    };
  },
  methods: {
    updateTodo() {
      if (this.text === "") return;
      this.todos.push({ text: this.text, checked: false });
      this.text = "";
    },
    clearTodo(index: number, checked: boolean) {
      this.todos[index].checked = !checked;
    },
    delectTodo(data: { checked: boolean; text: string }) {
      this.todos.splice(data, 1);
    },
    showtest() {
      const data = this.$store.dispatch("GetLocalData");
      console.log(JSON.parse(data));
      // this.$store.dispatch("saveLocal", this.todos);
    },
  },
})
@
export default class Landing extends Vue {
  setup() {
    console.log("test");
    // this.todos = this.$store.saveTodolist.getLocal();
    // console.log(store.saveTodolist.getLocal());
    // console.log(this.$store.saveTodolist.getLocal());
  }
}
</script>

<style lang="scss">
.wrap {
  padding: 0 30px;
}
.todoWrap {
  display: flex;
  padding: 7px 3px;
  border: 1px solid black;
}
.todotitle {
  font-size: 1.02em;
}
.cleared {
  text-decoration: line-through;
}
.todotext {
  margin-left: 10px;
}
.addtodoText {
  margin: 0px 7px;
  border: none;
  outline: none;
  flex-grow: 1;
}
.addtodoButton {
  border: none;
  border-radius: 2px;
  cursor: pointer;
  background: rgba(0, 0, 0, 0.3);
  transition: transform 0.5s;
  &:hover {
    transform: scale(1.2);
  }
}
.todos {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #2c3e50;
  border-bottom: none;
  border-top: none;
}
.todoItem {
  flex-grow: 1;
  border-bottom: 1px solid #2c3e50;
  padding: 13px 0;
  background: rgba(44, 62, 80, 0.4);
  color: white;
  font-size: 18px;
  font-weight: bold;
  display: flex;
  align-items: center;
  position: relative;
}

.delectTodo {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  border: none;
}
</style>
