<template>
  <div>
    <h3>사용자 이름입니다.</h3>
    <strong>{{ propdata }}</strong>
  </div>
</template>

<script>
export default {
  name: "DetailName",
  props: ["propdata"],
  data() {
    return {};
  },
};
</script>

<style></style>
