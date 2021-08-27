<template>
    <div class="container">
        <div class="starship">
            <img class="info-field" src="./../../assets/ebon-hawk.jpg" alt="Ship">
            <div class="info-field">
                <p>Name:</p>
                <p>{{ship.name}}</p>
            </div>
            <div class="info-field">
                <p>Model:</p>
                <p>{{ship["model"]}}</p>
            </div>
            <div class="info-field">
                <p>Starship Class:</p>
                <p>{{ship["starship_class"]}}</p>
            </div>
            <div class="info-field">
                <p>Manufacturer:</p>
                <p>{{ship["manufacturer"]}}</p>
            </div>
            <div class="info-field">
                <p>Manufacture Date:</p>
                <p>{{ship["created"]}}</p>
            </div>
            <div class="info-field">
                <p>MGLT:</p>
                <p>{{ship["MGLT"]}}</p>
            </div>
            <div class="info-field">
                <p>Cargo Capacity:</p>
                <p>{{ship["cargo_capacity"]}}</p>
            </div>
            <div class="info-field">
                <p>Cost (Republic Credits):</p>
                <p>{{ship["cost_in_credits"]}}</p>
            </div>
            <div class="info-field">
                <p>Crew ID:</p>
                <p>{{ship["crew"]}}</p>
            </div>
            <div class="info-field">
                <p>Modified Date:</p>
                <p>{{ship["edited"]}}</p>
            </div>
            <div class="info-field">
                <p>Hyperdrive Rating:</p>
                <p>{{ship["hyperdrive_rating"]}}</p>
            </div>
            <div class="info-field">
                <p>Length:</p>
                <p>{{ship["length"]}}</p>
            </div>
            <div class="info-field">
                <p>Max. Atmosphering Speed:</p>
                <p>{{ship["max_atmosphering_speed"]}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'sw-ship-details-card',
    props: ['ship'],
    methods: {

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
.starship {
    background-color: gray;
    margin: 1rem;
    padding: 1rem;
    font-size: 1.6rem;
    width: 50%;
    border: 1px solid orange;
    box-shadow: 1px 0 12px orange;
}
.info-field {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>