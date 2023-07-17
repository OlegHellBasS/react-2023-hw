import React, {useEffect, useState} from 'react';

import Post from "./Post";

export const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => res.json())
            .then((posts) => setPosts(posts))
            .catch()
    }, [])
    console.log(posts);


    return (
        <div>
            {posts.map((post) => <Post key={post.id} post={post}/>)}
        </div>
    );
};



