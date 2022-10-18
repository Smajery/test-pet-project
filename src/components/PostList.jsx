import React, {useEffect} from 'react';
import {useActions} from "../hooks/useActions";
import {useSelector} from "react-redux";
import PostItem from "./PostItem";
import Loader from "./UI/Loader/Loader";

const PostList = () => {

    const {fetchPosts} = useActions()
    const {posts, isLoading} = useSelector(state => state.PostsReducer)

    useEffect(() => {
        fetchPosts()
    }, [])

    return (
        isLoading
            ?
            <Loader/>
            :
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