<template>
  <div class="inputBox">
    <input
      type="text"
      class="addList"
      v-model="newTodoItem"
      placeholder="할 일을 입력하세요."
    />
    <button type="button" class="addBtn" @click="addTodo">➕</button>

    <ErrorModal v-if="showModal" @close="showModal = false">
      <template v-slot:header>💥 주의 💥</template>
      <template v-slot:footer>
        <p>할 일을 반드시 입력하셔야 합니다.</p>
        <button class="closeBtn" @click="showModal = false">닫기</button>
      </template>
    </ErrorModal>
  </div>
</template>

<script>
import ErrorModal from "./ErrorModal.vue";

export default {
  data() {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        let value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit("addTodo", value); //app.vue에 전달
        this.clearInput();
      } else {
        this.showModal = true;
      }
    },
    clearInput() {
      this.newTodoItem = "";
    },
  },
  components: {
    ErrorModal,
  },
};
</script>

<style>
.inputBox {
  margin-bottom: 50px;
}
.addList {
  padding: 2px 3px;
}
</style>
