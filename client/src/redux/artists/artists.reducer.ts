import { ArtistsResponse } from "../../types/artists.types";
import { ArtistsAction, ArtistsActionTypes } from "./artists.type";

interface ArtistState {
    artists: ArtistsResponse | null;
    loading: boolean;
    error: string;
}

const defaultState: ArtistState = {
    artists: null,
    loading: false,
    error: "",
}

export const artistReducer = (state: ArtistState = defaultState, action: ArtistsAction): ArtistState => {
    switch(action.type) {
        case `${ArtistsActionTypes.GET_ARTIST}_PENDING`:
            return {
                ...state,
                loading: true,
                artists: null,
        }; 
        case `${ArtistsActionTypes.GET_ARTIST}_FULFILLED`:
            return {
                ...state,
                loading: false,
                artists: action.payload,
            }; 
        case `${ArtistsActionTypes.GET_ARTIST}_REJECTED`:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }; 
        default:
            return state;
    }
}