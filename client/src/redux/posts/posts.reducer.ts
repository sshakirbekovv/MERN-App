import { Post } from "../../types/post.types";
import { PostsAction, PostsActionTypes } from "./posts.types";

export interface PostsState {
  posts: Post[];
  loading: boolean;
}

const defaultState = {
  posts: [],
  loading: false,
};

export const postReducer = (
  state: PostsState = defaultState,
  action: PostsAction
): PostsState => {
  switch (action.type) {
    case `${PostsActionTypes.GET_POSTS}_PENDING`:
      return {
        ...state,
        loading: true,
        posts: [],
      };
    case `${PostsActionTypes.CREATE_POST}_FULFILLED`:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    case `${PostsActionTypes.GET_POSTS}_FULFILLED`:
      return {
        ...state,
        loading: false,
        posts: action.payload,
      };
    case `${PostsActionTypes.DELETE_POST}_FULFILLED`:
      return {
        ...state,
        posts: state.posts.filter((post: Post) => post._id !== action.meta.id),
      };
    default:
      return state;
  }
};
