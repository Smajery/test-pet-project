import PostService from "../../../api/PostService";

export const PostsActionCreators = {

    setPosts: (payload) => ({type: "ADD_POSTS", payload}),
    fetchPosts: () => async (dispatch) => {
        try{
            const response = await PostService.getPosts()
            dispatch(PostsActionCreators.setPosts(response.data))
        } catch (e) {
            console.log(e)
        }
    }

}