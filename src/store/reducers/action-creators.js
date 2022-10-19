import {PostsActionCreators} from "./posts/action-creators";
import {TodosActionCreators} from "./todos/action-creators";
import {AuthActionCreators} from "./auth/action-creators";

export const AllActionCreators = {
    ...PostsActionCreators,
    ...TodosActionCreators,
    ...AuthActionCreators,
}