import axios from "axios";

export default class PostService {
    static async getPosts() {
        return axios.get('https://jsonplaceholder.typicode.com/posts/?_limit=20&_page=1')
    }
}