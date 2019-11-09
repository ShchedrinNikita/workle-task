<template>
  <div id="app">
    <Set />
    <Pagination />
  </div>
</template>

<script>
import Set from "./components/Set.vue";
import Card from "./components/Card.vue";
import Pagination from "./components/Pagination.vue";

export default {
  name: "app",
  components: {
    Set,
    Pagination
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
