<template>
  <div class="clear-container">
    <button type="button" class="clearAll" @click="clearTodo">전체 삭제</button>
  </div>
</template>

<script>
export default {
  name: "TodoFooter",
  methods: {
    clearTodo() {
      this.$emit("clearTodo");
    },
  },
};
</script>

<style>
.clear-container {
  margin-top: 50px;
}
.clearAll {
  width: 200px;
  height: 50px;
  background: #039;
  border: 0px none;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
