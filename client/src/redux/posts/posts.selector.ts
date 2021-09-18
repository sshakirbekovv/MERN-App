import { useSelector } from 'react-redux';
import { RootState } from '../root-reducer';

const selectPosts = (state: RootState) => state.post;

export const usePosts = () => useSelector(selectPosts);