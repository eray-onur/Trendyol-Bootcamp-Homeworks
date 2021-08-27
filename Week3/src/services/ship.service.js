import axios from "axios";
import { GET_ALL_STARSHIPS_URI } from "../constants/api.constants";

export default class ShipService {
    async fetchAllStarships(filter) {
        if(!filter) filter = '';
        try {
            const starShips =  await axios.get(`${GET_ALL_STARSHIPS_URI}${filter}`);
            return Promise.resolve(starShips);
        } catch (err) {
            return Promise.reject('Network Error');
        }
    }
}