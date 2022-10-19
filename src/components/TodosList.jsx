import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";
import TodosItem from "./TodosItem";
import Loader from "./UI/Loader/Loader";

const TodosList = () => {
    const {todos, isLoading} = useSelector(state => state.TodosReducer)

    const {fetchTodos, addTodo, removeTodo} = useActions()

    useEffect(() => {
        fetchTodos()
    }, [])

    return (
        isLoading
            ?
            <Loader/>
            :
            <div className='todos-list'>
                <fieldset>
                    {todos.length === 0
                        ?
                        <legend>Список дел пуст</legend>
                        :
                        <legend>Список дел</legend>
                    }
                    <div>
                        {todos.map(todo =>
                            <TodosItem
                                key={todo.id}
                                title={todo.title}
                                completed={todo.completed}
                                removeTodo={() => removeTodo(todo)}
                            />
                        )}
                    </div>
                </fieldset>
                <button
                    className='btn-add'
                    onClick={() => addTodo(prompt('Напишите свое дело'))
                    }>
                    Добавить дело
                </button>
            </div>
    );
};

export default TodosList;