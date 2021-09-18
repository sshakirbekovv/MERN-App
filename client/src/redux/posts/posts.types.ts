export enum PostsActionTypes {
   CREATE_POST = 'CREATE_POST',
   GET_POSTS = 'GET_POSTS',
   DELETE_POST = 'DELETE_POST',
}

export interface PostsAction {
  type: PostsActionTypes;
  payload?: any;
  meta: { id: string };
}
