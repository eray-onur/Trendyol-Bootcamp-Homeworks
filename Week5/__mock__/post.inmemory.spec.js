import { expect, it } from "@jest/globals";
import { posts } from './data/posts';
import { users } from './data/users';
import PostInMemoryProvider from './../src/providers/post.inmemory-provider';

describe('post inmemory provider', () => {
    it('should return the most active user in posting', async () => {
        const provider = new PostInMemoryProvider();
        expect(await provider.getAllPosts()).toEqual(posts);
    })

    it('should return all available posts', async () => {
        const provider = new PostInMemoryProvider();

        expect(await provider.getUserWithMostPosts()).toEqual(users[8]);
    });
});


