import PostService from "../../../api/PostService";

export const PostsActionCreators = {
    setIsLoading: (isLoading) => ({type: "SET_IS_LOADING", payload: isLoading}),
    setPosts: (payload) => ({type: "ADD_POSTS", payload}),
    fetchPosts: () => async (dispatch) => {
        try{
            dispatch(PostsActionCreators.setIsLoading(true))
            const response = await PostService.getPosts()
            dispatch(PostsActionCreators.setPosts(response.data))
            dispatch(PostsActionCreators.setIsLoading(false))
        } catch (e) {
            console.log(e)
        }
    }

}