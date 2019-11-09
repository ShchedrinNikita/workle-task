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
  created() {
    this.fetchCards();
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
</style>