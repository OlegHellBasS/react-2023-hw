import React, {useState} from 'react';

import './Post.css'
const Post = ({post}) => {
    const [postDetal, setPostDetal] = useState(false)
    return (
        <div className="Post">
            <div className="postId"><h3>ID: {post.id}</h3></div>
            <div className="postTitle"><p><b>Title:</b> {post.title}</p></div>
            <div><button onClick={() => setPostDetal(!postDetal)}>Post Detal</button></div>
            {postDetal && <div className="postDetal"><p><b>Body:</b> {post.body}</p></div>}
        </div>
    );
};

export default Post;
