import React from 'react';

export const Post = ({post}) => {
    return (
        <div>
            <ul>
                <li><b>UserID:</b>{post.userId}</li>
                <li><b>ID:</b>{post.id}</li>
                <li><b>Title:</b>{post.title}</li>
                <li><b>Body:</b>{post.body}</li>
            </ul>
        </div>
    );
};