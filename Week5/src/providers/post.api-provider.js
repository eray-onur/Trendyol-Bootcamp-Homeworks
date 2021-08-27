import axios from 'axios';

export default class PostProvider {

    

    constructor() {
        this.apiUri = "https://jsonplaceholder.typicode.com";
    }

    async getAllPosts() {
        const response = await axios.get(`${this.apiUri}/posts`);
        return Promise.resolve(response.data);
    }

    async getPostById(id) {
        const response = await axios.get(`${this.apiUri}/posts/${id}`);
        return Promise.resolve(response.data);
    }
}