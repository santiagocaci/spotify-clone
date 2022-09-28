export interface Artist {
  adamid: string;
  alias: string;
  id: string;
}

export interface Highlightsurls {}

export type Name = 'apple' | 'hub:applemusic:deeplink';

export type ActionType = 'applemusicopen' | 'applemusicplay' | 'uri';

export type Displayname = 'APPLE MUSIC';

export type Providername = 'applemusic';

export type BeacondataType = 'open';

export interface Beacondata {
  providername: Providername;
  type: BeacondataType;
}

export type Caption = 'OPEN';

export type Listcaption = 'Open in Apple Music';

export interface Action {
  id?: string;
  name: Name;
  type: ActionType;
  uri?: string;
}

export type HubType = 'APPLEMUSIC';

export interface Images {
  background: string;
  coverart: string;
  coverarthq: string;
  joecolor: string;
}

export interface Share {
  avatar: string;
  href: string;
  html: string;
  image: string;
  snapchat: string;
  subject: string;
  text: string;
  twitter: string;
}

export type RootObjectType = 'MUSIC';

export interface Option {
  actions: Action[];
  beacondata: Beacondata;
  caption: Caption;
  colouroverflowimage: boolean;
  image: string;
  listcaption: Listcaption;
  overflowimage: string;
  providername: Providername;
  type: BeacondataType;
}

export interface Hub {
  actions: Action[];
  displayname: Displayname;
  explicit: boolean;
  image: string;
  options: Option[];
  type: HubType;
}

export interface WorldChartResponse {
  artists: Artist[];
  highlightsurls: Highlightsurls;
  hub: Hub;
  images: Images;
  key: string;
  layout: string;
  properties: Highlightsurls;
  share: Share;
  subtitle: string;
  title: string;
  type: RootObjectType;
  url: string;
}
