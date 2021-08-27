import { expect } from '@jest/globals';
import axios from 'axios';
import PostProvider from '../src/providers/post.api-provider';

jest.mock("axios");

describe('post api provider', () => {

    it('should get all posts', async () => {

        const provider = new PostProvider();

        axios.get.mockImplementation(() => {
            return Promise.resolve({
                data: [
                    {
                        "userId": 7,
                        "id": 64,
                        "title": "et fugit quas eum in in aperiam quod",
                        "body": "id velit blanditiis\neum ea voluptatem\nmolestiae sint occaecati est eos perspiciatis\nincidunt a error provident eaque aut aut qui"
                    }
                ]
            });
        });

        expect(await provider.getAllPosts()).toEqual([
            {
                "userId": 7,
                "id": 64,
                "title": "et fugit quas eum in in aperiam quod",
                "body": "id velit blanditiis\neum ea voluptatem\nmolestiae sint occaecati est eos perspiciatis\nincidunt a error provident eaque aut aut qui"
            }
        ]);
    });

    it('getPostById(id)', async () => {
        const provider = new PostProvider();
        const postId = 6;
        
        axios.get.mockImplementation(() => {
            return Promise.resolve({
                data: [
                    {
                        "userId": 1,
                        "id": 6,
                        "title": "dolorem eum magni eos aperiam quia",
                        "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
                    }
                ]
            });
        });

        expect(await provider.getPostById(postId)).toEqual([
            {
                "userId": 1,
                "id": 6,
                "title": "dolorem eum magni eos aperiam quia",
                "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
            }
        ]);
    });

});