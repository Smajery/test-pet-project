import TodosService from "../../../api/TodosService";
import nextId from "react-id-generator";
import {ADD_TODO, ADD_MANY_TODOS, REMOVE_TODO, SET_IS_LOADING} from "./consts";

export const TodosActionCreators = {
    setIsLoading: (isLoading) => ({type: SET_IS_LOADING, payload: isLoading}),
    setTodo: (payload) => ({type: ADD_TODO, payload}),
    setTodos: (payload) => ({type: ADD_MANY_TODOS, payload}),
    fetchTodos: () => async dispatch => {
        dispatch(TodosActionCreators.setIsLoading(true))
        const response = await TodosService.getTodos()
        dispatch(TodosActionCreators.setTodos(response.data))
        dispatch(TodosActionCreators.setIsLoading(false))
    },
    addTodo: (title) => dispatch => {
        const todo = {
            id: nextId(),
            title,
            completed: false,
        }
        dispatch(TodosActionCreators.setTodo(todo))
    },
    removeTodo: (todo) => dispatch => {
        dispatch({type: REMOVE_TODO, payload: todo.id})
    }
}