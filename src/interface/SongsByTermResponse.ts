import { WorldChartResponse } from './WorldChartResponse';

interface Hits {
  hits: { track: WorldChartResponse }[];
}

interface HitsArtists {
  hits: {
    avatar: string;
    name: string;
    verified: boolean;
    weburl: string;
    adamid: string;
  }[];
}

export interface SongsBySearchResponse {
  tracks: Hits;
  artists: HitsArtists;
}
