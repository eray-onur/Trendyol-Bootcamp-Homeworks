import ShipService from '../services/ship.service';
export default {
    fetchStarships(context) {
        const service = new ShipService();
        service.fetchAllStarships().then(response => {
            console.log("STARSHIPS FETCH RESPONSE: ");
            console.log(response);
            response['data'] && context.commit('SET_STARSHIPS', response.data);
        });
    },
    fetchStarshipByName(context) {
        const service = new ShipService();
        service.fetchAllStarships().then(response => {
            console.log("STARSHIPS FETCH RESPONSE: ");
            console.log(response);
            response['data'] && context.commit('SET_STARSHIPS', response.data);
        });
    }
}