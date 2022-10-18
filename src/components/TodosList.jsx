import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";

const TodosList = () => {
    const todos = useSelector(state => state.TodosReducer.todos)

    const {fetchTodos} = useActions()

    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        <fieldset className='todos-list'>
            <legend>Список дел</legend>
            <div>
                {todos.map(todo =>
                    <div key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                        />
                        <label>{todo.title}</label>
                    </div>
                )}
            </div>
        </fieldset>
    );
};

export default TodosList;