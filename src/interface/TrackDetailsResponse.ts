interface Artist {
  adamid: string;
  alias: string;
  id: string;
}

interface Genres {
  primary: string;
}

interface Highlightsurls {}

interface Action {
  id?: string;
  name: string;
  type: string;
  uri?: string;
}

interface Beacondata {
  providername: string;
  type: string;
}

interface Option {
  actions: Action[];
  beacondata: Beacondata;
  caption: string;
  colouroverflowimage: boolean;
  image: string;
  listcaption: string;
  overflowimage: string;
  providername: string;
  type: string;
}
interface Hub {
  actions: Action[];
  displayname: string;
  explicit: boolean;
  image: string;
  options: Option[];
  type: string;
}
interface Images {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor: string;
}

interface Metadatum {
  text: string;
  title: string;
}

interface Metapage {
  caption: string;
  image: string;
}

interface Section {
  metadata?: Metadatum[];
  metapages?: Metapage[];
  text?: string[];
  tabname: string;
  type: string;
}
interface Share {
  avatar: string;
  href: string;
  html: string;
  image: string;
  snapchat: string;
  subject: string;
  text: string;
  twitter: string;
}

interface Urlparams {
  '{trackartist}': string;
  '{tracktitle}': string;
}

export interface TrackDetailsResponse {
  albumadamid: string;
  alias: string;
  artists: Artist[];
  genres: Genres;
  highlightsurls: Highlightsurls;
  hub: Hub;
  images: Images;
  isrc: string;
  key: string;
  layout: string;
  releasedate: string;
  sections: Section[];
  share: Share;
  subtitle: string;
  title: string;
  trackadamid: string;
  type: string;
  url: string;
  urlparams: Urlparams;
}
