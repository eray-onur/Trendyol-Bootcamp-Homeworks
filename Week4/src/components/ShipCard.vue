<template>
    <div class="starship">
        <div class="info-field">
            <p>Name:</p>
            <p>{{ship["name"]}}</p>
        </div>
        <div class="info-field">
            <p>Model:</p>
            <p>{{ship["model"]}}</p>
        </div>
        <div class="info-field">
            <p>Hyperdrive Rating:</p>
            <p>{{ship["hyperdrive_rating"]}}</p>
        </div>
        <button v-on:click="goToDetails(ship['name'])">Go to Details</button>
    </div>
</template>

<script>
export default {
    name: 'sw-ship-card',
    props: ['ship'],
    methods: {
        goToDetails(name) {
            this.$router.push({
                name: `/ships/${name}`, 
                params: {name: name}
            });
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>