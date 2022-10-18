import {PostsActionCreators} from "./posts/action-creators";
import {TodosActionCreators} from "./todos/action-creators";

export const AllActionCreators = {
    ...PostsActionCreators,
    ...TodosActionCreators
}