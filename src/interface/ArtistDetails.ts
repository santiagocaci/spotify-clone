enum Name {
  TheBeatles = 'The Beatles',
}

interface Artwork {
  bgColor: string;
  hasP3: boolean;
  height: number;
  textColor1: string;
  textColor2: string;
  textColor3: string;
  textColor4: string;
  url: string;
  width: number;
}

enum AudioLocale {
  EnUS = 'en-US',
}

enum AudioTrait {
  Atmos = 'atmos',
  HiResLossless = 'hi-res-lossless',
  Lossless = 'lossless',
  LossyStereo = 'lossy-stereo',
  Spatial = 'spatial',
}

enum ComposerName {
  BertRussellPhilMedley = 'Bert Russell & Phil Medley',
  GeorgeHarrison = 'George Harrison',
  JohnLennonPaulMcCartney = 'John Lennon & Paul McCartney',
  PaulMcCartneyJohnLennon = 'Paul McCartney & John Lennon',
}

interface PurpleEditorialNotes {
  short: string;
  standard?: string;
}

enum Kind {
  Album = 'album',
  Song = 'song',
}
interface PlayParams {
  id: string;
  kind: Kind;
}
interface Preview {
  url: string;
}

enum RecordLabel {
  UMCUniversalMusicCatalogue = 'UMC (Universal Music Catalogue)',
}

type Type = 'albums' | 'songs';

enum GenreName {
  Music = 'Music',
  Pop = 'Pop',
  Rock = 'Rock',
}

interface The136975_Attributes {
  artwork: Artwork;
  genreNames: GenreName[];
  name: Name;
  url: string;
}

interface MetaViews {
  order: string[];
}

interface The136975_Meta {
  views: MetaViews;
}

interface AlbumsAttributes {
  title: string;
}

interface AlbumsDatum {
  href: string;
  id: string;
  type: Type;
}
interface Albums {
  attributes?: AlbumsAttributes;
  data: AlbumsDatum[];
  href: string;
  next: string;
}
interface Relationships {
  albums: Albums;
}

interface DatumAttributes {
  artistName: Name;
  artwork: Artwork;
  audioTraits: AudioTrait[];
  copyright: string;
  editorialNotes?: PurpleEditorialNotes;
  genreNames: string[];
  isCompilation: boolean;
  isComplete: boolean;
  isMasteredForItunes: boolean;
  isPrerelease: boolean;
  isSingle: boolean;
  name: string;
  playParams: PlayParams;
  recordLabel: RecordLabel;
  releaseDate: Date;
  trackCount: number;
  upc: string;
  url: string;
}

interface LatestReleaseDatum {
  attributes?: DatumAttributes;
  href: string;
  id: string;
  type: Type;
}

interface LatestRelease {
  attributes: AlbumsAttributes;
  data: LatestReleaseDatum[];
  href: string;
}

interface The136975_Views {
  'latest-release': LatestRelease;
  'top-songs': Albums;
}

interface The136975 {
  attributes: The136975_Attributes;
  href: string;
  id: string;
  meta: The136975_Meta;
  relationships: Relationships;
  type: string;
  views: The136975_Views;
}

interface Artists {
  '136975': The136975;
}

interface FluffyEditorialNotes {
  short: string;
}

interface SongAttributes {
  albumName?: string;
  artistName: Name;
  artwork: Artwork;
  audioLocale?: AudioLocale;
  audioTraits: AudioTrait[];
  composerName?: ComposerName;
  copyright?: string;
  discNumber?: number;
  durationInMillis?: number;
  editorialNotes?: FluffyEditorialNotes;
  genreNames: GenreName[];
  hasLyrics?: boolean;
  hasTimeSyncedLyrics?: boolean;
  isAppleDigitalMaster?: boolean;
  isCompilation?: boolean;
  isComplete?: boolean;
  isMasteredForItunes: boolean;
  isPrerelease?: boolean;
  isSingle?: boolean;
  isrc?: string;
  name: string;
  playParams: PlayParams;
  previews?: Preview[];
  recordLabel?: RecordLabel;
  releaseDate: Date;
  trackCount?: number;
  trackNumber?: number;
  upc?: string;
  url: string;
}

interface AlbumAttributes {
  albumName?: string;
  artistName: Name;
  artwork: Artwork;
  audioLocale?: AudioLocale;
  audioTraits: AudioTrait[];
  composerName?: ComposerName;
  copyright?: string;
  discNumber?: number;
  durationInMillis?: number;
  editorialNotes?: PurpleEditorialNotes;
  genreNames: string[];
  hasLyrics?: boolean;
  hasTimeSyncedLyrics?: boolean;
  isAppleDigitalMaster?: boolean;
  isCompilation?: boolean;
  isComplete?: boolean;
  isMasteredForItunes: boolean;
  isPrerelease?: boolean;
  isSingle?: boolean;
  isrc?: string;
  name: string;
  playParams: PlayParams;
  previews?: Preview[];
  recordLabel?: RecordLabel;
  releaseDate: Date;
  trackCount?: number;
  trackNumber?: number;
  upc?: string;
  url: string;
}

interface Album {
  attributes?: AlbumAttributes;
  href: string;
  id: string;
  type: Type;
}

interface SongMeta {
  formerIds: string[];
}

export interface Song {
  attributes?: SongAttributes;
  href: string;
  id: string;
  meta?: SongMeta;
  type: Type;
}

export interface ArtistDetailsResponse {
  albums: { [key: string]: Album };
  artists: Artists;
  songs: { [key: string]: Song };
}
