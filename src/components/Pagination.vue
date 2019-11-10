<template>
  <div class="pagination">
    <div @click="onClick(1)" v-if="currentPage !== 1" class="page-number">1</div>
    <div v-if="currentPage > 3" class="dots">...</div>
    <div
      @click="onClick(currentPage-1)"
      v-if="currentPage > 2"
      class="page-number"
    >{{currentPage-1}}</div>
    <div class="page-number active">{{currentPage}}</div>
    <div
      @click="onClick(currentPage+1)"
      v-if="currentPage < pages-1"
      class="page-number"
    >{{currentPage+1}}</div>
    <div v-if="currentPage < pages-2" class="dots">...</div>
    <div @click="onClick(pages)" v-if="currentPage !== pages" class="page-number">{{pages}}</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Pagination",
  methods: {
    ...mapActions(["fetchCards"]),
    onClick(page) {
      this.fetchCards(page);
    }
  },
  computed: mapGetters(["allCards", "currentPage", "pages"])
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
  display: flex;
  align-items: center;
  justify-content: center;
  .page-number {
    font-size: 1rem;
    opacity: 1;
    color: white;
    padding: 10px;
    &.active {
      font-size: 1.5rem;
    }
  }
  .dots {
    font-size: 1rem;
    opacity: 1;
    color: white;
    padding: 10px;
  }
}
</style>