import axios from "axios";

export default class TodosService {
    static async getTodos() {
        return axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
    }

}