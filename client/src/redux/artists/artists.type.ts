export enum ArtistsActionTypes {
    GET_ARTIST = 'GET_ARTIST',
 }
 
 export interface ArtistsAction {
   type: ArtistsActionTypes;
   payload?: any;
 }
  