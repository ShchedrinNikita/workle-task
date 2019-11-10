<template>
  <div class="pagination">
    <router-link
      :to="{ name: 'Set', params: { page: 1}}"
      v-if="this.$route.params.page != 1"
      class="page-number"
    >1</router-link>
    <div v-if="this.$route.params.page > 3" class="dots">...</div>
    <router-link
      :to="{ name: 'Set', params: { page: +this.$route.params.page-1}}"
      v-if="this.$route.params.page > 2"
      class="page-number"
    >{{this.$route.params.page-1}}</router-link>
    <div class="page-number active">{{+this.$route.params.page}}</div>
    <router-link
      :to="{ name: 'Set', params: { page: +this.$route.params.page+1}}"
      v-if="this.$route.params.page < pages-1"
      class="page-number"
    >{{+this.$route.params.page+1}}</router-link>
    <div v-if="this.$route.params.page < pages-2" class="dots">...</div>
    <router-link
      :to="{ name: 'Set', params: { page: pages}}"
      v-if="this.$route.params.page != pages"
      class="page-number"
    >{{pages}}</router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Pagination",
  computed: mapGetters(["pages"])
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
    text-decoration: none;
    font-size: 1rem;
    opacity: 1;
    color: white;
    padding: 10px;
    cursor: pointer;
    &:hover {
      transition: 0.3s;
      font-size: 1.2rem;
      cursor: pointer;
    }
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