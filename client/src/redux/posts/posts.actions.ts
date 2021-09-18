import { creaetePost, getPosts, deletePost } from "../../api/posts.api";
import { Post } from "../../types/post.types";
import { PostsActionTypes } from "./posts.types";


export const creaetePostAction = (data: Post) => ({
  type: PostsActionTypes.CREATE_POST,
  payload: creaetePost(data),
});

export const getPostsAction = () => ({
  type: PostsActionTypes.GET_POSTS,
  payload: getPosts(),
});

export const deletePostAction = (id: string) => ({
  type: PostsActionTypes.DELETE_POST,
  payload: deletePost(id),
  meta: { id },
});
