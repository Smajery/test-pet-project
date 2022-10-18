import React from 'react';
import {useActions} from "../hooks/useActions";
import {useSelector} from "react-redux";

const PostList = () => {

    const {fetchPosts} = useActions()
    const posts = useSelector(state => state.PostsReducer.posts)

    return (
        <div>
            <button onClick={() => fetchPosts()}>Добавить посты</button>
            {posts.map(post =>
                <div key={post.id}>
                    <div>{post.title}</div>
                    <div>{post.body}</div>
                </div>
            )}
        </div>
    );
};

export default PostList;