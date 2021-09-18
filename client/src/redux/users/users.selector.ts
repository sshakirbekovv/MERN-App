import { useSelector } from 'react-redux';
import { RootState } from '../root-reducer';

const selectUsers = (state: RootState) => state.user;

export const useUsers = () => useSelector(selectUsers);