import { getArtist } from "../../api/artists.api";
import { ArtistsActionTypes } from "./artists.type";

export const getArtistAction = (queryTerm: string) => ({
  type: ArtistsActionTypes.GET_ARTIST,
  payload: getArtist(queryTerm),
});
