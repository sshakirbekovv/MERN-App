import axios from "axios";
import { itunes_url } from "../environment/environment";
import { ArtistsResponse } from "../types/artists.types";

export const getArtist = (queryTerm: string) => {
    const params: any = {
        term: `${queryTerm}`,
        media: 'music',
        entity: 'album',
        attribute: 'artistTerm',
        limit: 50
    }
    
    return axios.request<ArtistsResponse>({
        url: `${itunes_url}/search`,
        method: 'get',
        headers: { 
            'Access-Control-Allow-Origin': '*'
        },
        params  
    }).then((res) => res.data);
}