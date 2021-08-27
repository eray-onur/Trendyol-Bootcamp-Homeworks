<template>
  <div class="container">
    <h1>Shipyard</h1>
    <div>
      <input v-model="name" id="ship-search" type="text" placeholder="Ship name...">
    </div>
    <div id="shipyard">
        <p v-if="this.ships.results.length === 0">No ships were found.</p>
        <template v-else>
          <sw-ship-card v-for="(ship, index) in filteredShips" v-bind:ship="ship" :key="`${ship.name}-${index}`" :value="ship.name"/>
        </template>
    </div>
    <div id="pagination-menu" v-if="prev && next">
      <button :disabled="!prev">Previous</button>
      <button :disabled="!next">Next</button>
    </div>
  </div>

</template>

<script>
import { mapState, mapActions } from 'vuex';
import ShipCard from '../components/ShipCard.vue';
export default {
  name: "home",
  components: {
    'sw-ship-card': ShipCard
  },
  data() {
    return {
      name: '',
    };
  },
  mounted: async function() {
    this.fetchStarships();
  },
  methods: {
    ...mapActions({
      fetchStarships: 'fetchStarships',
    }),
    goToDetails(name) {
      this.$router.push({
          name: `/ships/${name}`, 
          params: {name: name}
      });
    }
  },
  computed: {
    ...mapState({
      ships: state => state.ships,
      next: state => state.next,
      prev: state => state.prev,
    }),
    filteredShips() {
      return this.ships.filter(s => s.name === name);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.info-field {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#shipyard {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: .2rem;
  min-height: 20rem;
}

#ship-search {
  border: 3px solid transparent;
  outline: none !important;
  border: none;
  width: 40rem;
  min-height: 4rem;
  padding: 0 2rem;
  border-radius: 50px;
  transition: 0.2s all;
}
#ship-search:focus {
  border: 3px solid orange;
  width: 50rem;
}

#pagination-menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
</style>
