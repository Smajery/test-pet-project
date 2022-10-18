import TodosService from "../../../api/TodosService";

export const TodosActionCreators = {
    setTodos: (payload) => ({type: "ADD_TODOS", payload}),
    fetchTodos: () => async dispatch => {
        const response = await TodosService.getTodos()
        dispatch(TodosActionCreators.setTodos(response.data))
    }
}