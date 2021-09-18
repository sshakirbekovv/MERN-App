import { useSelector } from 'react-redux';
import { RootState } from '../root-reducer';

const selectAuth = (state: RootState) => state.auth;

export const useAuth = () => useSelector(selectAuth);