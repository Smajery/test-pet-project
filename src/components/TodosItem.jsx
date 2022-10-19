import React, {useState} from 'react';

const TodosItem = (props) => {
    const [isCheckedValue, setIsCheckedValue] = useState(props.completed)

    return (
        <div className='todos-item'>
            <input
                type="checkbox"
                checked={isCheckedValue}
                onChange={event => setIsCheckedValue(event.target.checked)}
            />
            <label>{props.title}</label>
            <button
                className='btn-del'
                onClick={props.removeTodo}
            >
                Delete
            </button>
        </div>
    );
};

export default TodosItem;