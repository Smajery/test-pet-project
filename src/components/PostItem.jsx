import React from 'react';

const PostItem = (props) => {
    return (
        <div className='post-item'>
            <h3>{props.number}. {props.title}</h3>
            <h4>{props.body}</h4>
        </div>
    );
};

export default PostItem;