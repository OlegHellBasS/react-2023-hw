import React, {useEffect, useState} from 'react';

import {Post} from "../Post/Post";
export const Posts = ({userId}) => {

    const [posts, setPosts] = useState([])
    useEffect(() => {

            fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
                .then((response) => response.json())
                .then((value) => setPosts(value))
                .catch((error) => {
                    console.log(error);
                })
    },[userId]);
    console.log(posts);
    return (
        <div>
            {posts.map((post) => <Post key={post.id} post={post}/>)}
        </div>
    );
};

