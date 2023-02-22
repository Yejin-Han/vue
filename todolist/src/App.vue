<template>
  <div id="app">
    <header>
      <h1>TODO it!</h1>
    </header>
    <TodoInput @addTodo="addTodo"></TodoInput>
    <TodoList :propsData="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter
      @clearTodo="clearAll"
      v-if="clearToggle"
      @click="clearToggle = false"
    ></TodoFooter>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  name: "App",
  data() {
    return {
      todoItems: [],
      clearToggle: false,
    };
  },
  methods: {
    addTodo(todoItem) {
      localStorage.setItem(todoItem, todoItem);
      this.todoItems.push(todoItem);
      this.todoItems.reverse();
      this.clearToggle = true;
    },
    removeTodo(todoItem, idx) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(idx, 1);
    },
    clearAll() {
      localStorage.clear();
      this.todoItems = [];
    },
  },
  created() {
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
    this.todoItems.reverse();
  },
  components: {
    TodoList,
    TodoInput,
    TodoFooter,
  },
};
</script>

<style>
#app {
  text-align: center;
}
h1 {
  color: #356;
  margin: 2.3rem 0 1.8rem;
}
button {
  cursor: pointer;
}
</style>
