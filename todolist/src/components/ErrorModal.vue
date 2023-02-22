<template>
  <div class="modal-mask" @click="$emit('close')">
    <div class="modal-wrapper">
      <div class="modal-header">
        <slot name="header"></slot>
      </div>
      <div class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ErrorModal",
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-wrapper {
  width: 400px;
  padding: 20px 30px;
  background: #fff;
  border-radius: 8px;
}
.modal-header {
  color: #f96;
  margin-bottom: 20px;
  font-weight: bold;
}
.modal-footer {
  font-size: 1.5rem;
}
</style>
