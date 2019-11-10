<template>
  <div class="cards">
    <Card v-for="card in allCards" :key="card.id" :card="card" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Card from "./Card";

export default {
  name: "Set",
  methods: mapActions(["fetchCards"]),
  computed: mapGetters(["allCards"]),
  watch: {
    $route(to, from) {
      var pageNumber = this.$route.params.page;
      this.fetchCards(pageNumber);
    }
  },
  created() {
    var pageNumber = this.$route.params.page;
    this.fetchCards(pageNumber);
  },
  components: {
    Card
  }
};
</script>

<style scoped>
.cards {
  width: 660px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  margin-bottom: 60px;
}
@media (max-width: 768px) {
  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 360px;
  }
}
@media (max-width: 480px) {
  .cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 320px;
  }
}
</style>