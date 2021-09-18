import { useSelector } from 'react-redux';
import { RootState } from '../root-reducer';

const selectRole = (state: RootState) => state.roles;

export const useRole = () => useSelector(selectRole);