import { users } from '../../__mock__/data/users.js';
import { posts } from '../../__mock__/data/posts.js';

export default class PostInMemoryProvider {
    apiUri = "DUMMY";

    constructor() {

    }

    async getAllPosts() {
        return await Promise.resolve(posts);
    }

    async getPostById(id) {
        return await Promise.resolve(posts.find(p => p.id == id));
    }

    async getUserWithMostPosts() {

        const postCounts = {};
    
        posts.forEach(p => {
            if(p['userId'] in postCounts) {
                postCounts[p.userId]++;
            } else {
                postCounts[p.userId] = 1;
            }
        });

        const maxPostedUserId = Object.keys(postCounts).reduce((p1,p2) => {
            return postCounts[p1] > postCounts[p2] ? p1 : p2;
        });

        const maxPostedUser = users.find(u => u.id === +maxPostedUserId);

        return await Promise.resolve(maxPostedUser);
        
    }

}