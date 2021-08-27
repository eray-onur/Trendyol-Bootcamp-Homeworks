<template>
  <div class="container">
    <div class="header-container">
        <button id="btnGoBack" v-on:click="goBack()">Go Back</button>
    </div>
    <h1>Ship Details</h1>
    <div id="shipyard">
        <sw-ship-details-card v-if="ship" ship="ship"/>
            
        <p v-else>No ship data is available.</p>
    </div>
  </div>
</template>

<script>
import ShipDetailsCard from '../components/ShipDetailsCard.vue';
export default {
  name: "ship-details",
  data: function() {
      return {
        ship: null
      }
  },
  components: {
    'sw-ship-details-card': ShipDetailsCard
  },
  mounted: async function() {
    
  },
  methods: {
    fetchShipDetails() {
        const id = this.$route.params.name;
        console.log("ID : " + id);
    },
    goBack() {
        this.$router.back();
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header-container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-left: 5rem;
}
.starship {
    background-color: darkslateblue;
    margin: 1rem;
    padding: 1rem;
    font-size: 1.6rem;
}
.info-field {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#btnGoBack {
    width: 20rem;
}

</style>
