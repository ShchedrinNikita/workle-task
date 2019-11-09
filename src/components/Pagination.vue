<template>
  <div class="pagination">
    <div @click="onClick(page)" class="first-page" :page="1">1</div>
    <div @click="onClick(page)" class="first-page" :page="2">2</div>
    <div @click="onClick(page)" class="first-page" :page="45">45</div>
    <div class="last-page">59</div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Pagination",
  methods: {
    ...mapActions(["fetchCards"]),
    onClick(page) {
      this.fetchCards(page);
    }
  }
};
</script>

<style lang="scss">
.pagination {
  position: fixed;
  bottom: 0;
  background-color: black;
  height: 60px;
  width: 100%;
  opacity: 0.8;
}
</style>