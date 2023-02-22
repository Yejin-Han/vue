<template>
  <section>
    <transition-group name="list" tag="ul">
      <li name="list" v-for="(data, idx) in propsData" :key="data">
        {{ data }}
        <button @click="removeTodo(data, idx)" type="button" class="removeBtn">
          ➖
        </button>
      </li>
    </transition-group>
  </section>
</template>

<script>
export default {
  name: "TodoList",
  props: ["propsData"],
  methods: {
    removeTodo(todoItem, idx) {
      this.$emit("removeTodo", todoItem, idx);
    },
  },
};
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: left;
}
li {
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.6rem 0;
  padding: 0 1.4rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.removeBtn {
  color: #d44;
  height: 26px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.4s;
}
.list-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
