<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <nav>
      <router-link to="/1">First</router-link> |
      <router-link to="/2">Second</router-link> |
      <router-link to="/2/new">Second-New</router-link> |
      <router-link to="/3">Third</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style></style>
