import { useSelector } from 'react-redux';
import { RootState } from '../root-reducer';

const selectArtist = (state: RootState) => state.artist;

export const useArtist = () => useSelector(selectArtist);