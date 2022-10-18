import React, {useEffect} from 'react';
import {useActions} from "../hooks/useActions";
import {useSelector} from "react-redux";
import PostItem from "./PostItem";

const PostList = () => {

    const {fetchPosts} = useActions()
    const posts = useSelector(state => state.PostsReducer.posts)

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        <div className='post-list'>
            {posts.map((post, index) =>
                <PostItem
                    key={post.id}
                    title={post.title}
                    body={post.body}
                    number={index + 1}
                />
            )}
        </div>
    );
};

export default PostList;