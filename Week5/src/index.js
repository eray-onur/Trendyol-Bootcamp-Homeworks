import PostInMemoryProvider from "./providers/post.inmemory-provider.js";

const provider = new PostInMemoryProvider();

provider.getUserWithMostPosts().then(p => {
    console.log(p);
});