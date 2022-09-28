export interface Song {
    layout:         string;
    type:           Welcome5Type;
    key:            string;
    title:          string;
    subtitle:       string;
    share:          Share;
    images:         Images;
    hub:            Hub;
    artists:        Artist[];
    url:            string;
    highlightsurls: Highlightsurls;
    properties:     Highlightsurls;
}

export interface Artist {
    alias:  string;
    id:     string;
    adamid: string;
}

export interface Highlightsurls {
}

export interface Hub {
    type:        HubType;
    image:       string;
    actions:     Action[];
    options:     Option[];
    explicit:    boolean;
    displayname: Displayname;
}

export interface Action {
    name: Name;
    type: ActionType;
    id?:  string;
    uri?: string;
}

export enum Name {
    Apple = "apple",
    HubApplemusicDeeplink = "hub:applemusic:deeplink",
}

export enum ActionType {
    Applemusicopen = "applemusicopen",
    Applemusicplay = "applemusicplay",
    URI = "uri",
}

export enum Displayname {
    AppleMusic = "APPLE MUSIC",
}

export interface Option {
    caption:             Caption;
    actions:             Action[];
    beacondata:          Beacondata;
    image:               string;
    type:                BeacondataType;
    listcaption:         Listcaption;
    overflowimage:       string;
    colouroverflowimage: boolean;
    providername:        Providername;
}

export interface Beacondata {
    type:         BeacondataType;
    providername: Providername;
}

export enum Providername {
    Applemusic = "applemusic",
}

export enum BeacondataType {
    Open = "open",
}

export enum Caption {
    Open = "OPEN",
}

export enum Listcaption {
    OpenInAppleMusic = "Open in Apple Music",
}

export enum HubType {
    Applemusic = "APPLEMUSIC",
}

export interface Images {
    background: string;
    coverart:   string;
    coverarthq: string;
    joecolor:   string;
}

export interface Share {
    subject:  string;
    text:     string;
    href:     string;
    image:    string;
    twitter:  string;
    html:     string;
    avatar:   string;
    snapchat: string;
}

export enum Welcome5Type {
    Music = "MUSIC",
}

export interface ArtistData {
    artists: {[name: string]: ArtistDetails};
    songs:   { [key: string]: Song };
    albums:  { [key: string]: Album };
}

export interface Album {
    id:          string;
    type:        Type;
    href:        string;
    attributes?: AlbumAttributes;
}

export interface AlbumAttributes {
    copyright?:            string;
    genreNames:            string[];
    releaseDate:           Date;
    upc?:                  string;
    isMasteredForItunes:   boolean;
    artwork:               Artwork;
    playParams:            PlayParams;
    url:                   string;
    recordLabel?:          RecordLabel;
    isCompilation?:        boolean;
    trackCount?:           number;
    isPrerelease?:         boolean;
    audioTraits:           AudioTrait[];
    isSingle?:             boolean;
    name:                  string;
    artistName:            Name;
    editorialNotes?:       PurpleEditorialNotes;
    isComplete?:           boolean;
    albumName?:            string;
    hasTimeSyncedLyrics?:  boolean;
    trackNumber?:          number;
    durationInMillis?:     number;
    isrc?:                 string;
    composerName?:         ComposerName;
    audioLocale?:          AudioLocale;
    discNumber?:           number;
    isAppleDigitalMaster?: boolean;
    hasLyrics?:            boolean;
    previews?:             Preview[];
}

export enum Name {
    TheBeatles = "The Beatles",
}

export interface Artwork {
    width:      number;
    url:        string;
    height:     number;
    textColor3: string;
    textColor2: string;
    textColor4: string;
    textColor1: string;
    bgColor:    string;
    hasP3:      boolean;
}

export enum AudioLocale {
    EnUS = "en-US",
}

export enum AudioTrait {
    Atmos = "atmos",
    HiResLossless = "hi-res-lossless",
    Lossless = "lossless",
    LossyStereo = "lossy-stereo",
    Spatial = "spatial",
}

export enum ComposerName {
    BertRussellPhilMedley = "Bert Russell & Phil Medley",
    GeorgeHarrison = "George Harrison",
    JohnLennonPaulMcCartney = "John Lennon & Paul McCartney",
    PaulMcCartneyJohnLennon = "Paul McCartney & John Lennon",
}

export interface PurpleEditorialNotes {
    standard?: string;
    short:     string;
}

export interface PlayParams {
    id:   string;
    kind: Kind;
}

export enum Kind {
    Album = "album",
    Song = "song",
}

export interface Preview {
    url: string;
}

export enum RecordLabel {
    UMCUniversalMusicCatalogue = "UMC (Universal Music Catalogue)",
}

export enum Type {
    Albums = "albums",
    Songs = "songs",
}

export interface ArtistDetails {
    id:            string;
    type:          string;
    href:          string;
    attributes:    ArtistAttributes;
    relationships: Relationships;
    views:         The136975_Views;
    meta:          The136975_Meta;
}

export interface ArtistAttributes {
    genreNames: GenreName[];
    name:       Name;
    artwork:    Artwork;
    url:        string;
}

export enum GenreName {
    Music = "Music",
    Pop = "Pop",
    Rock = "Rock",
}

export interface The136975_Meta {
    views: MetaViews;
}

export interface MetaViews {
    order: string[];
}

export interface Relationships {
    albums: Albums;
}

export interface Albums {
    href:        string;
    next:        string;
    data:        AlbumsDatum[];
    attributes?: AlbumsAttributes;
}

export interface AlbumsAttributes {
    title: string;
}

export interface AlbumsDatum {
    id:   string;
    type: Type;
    href: string;
}

export interface The136975_Views {
    "top-songs":      Albums;
    "latest-release": LatestRelease;
}

export interface LatestRelease {
    href:       string;
    attributes: AlbumsAttributes;
    data:       LatestReleaseDatum[];
}

export interface LatestReleaseDatum {
    id:          string;
    type:        Type;
    href:        string;
    attributes?: ArtistData;
}

export interface AlbumDetails {
    copyright:           string;
    genreNames:          string[];
    releaseDate:         Date;
    upc:                 string;
    isMasteredForItunes: boolean;
    artwork:             Artwork;
    playParams:          PlayParams;
    url:                 string;
    recordLabel:         RecordLabel;
    isCompilation:       boolean;
    trackCount:          number;
    isPrerelease:        boolean;
    audioTraits:         AudioTrait[];
    isSingle:            boolean;
    name:                string;
    artistName:          Name;
    editorialNotes?:     PurpleEditorialNotes;
    isComplete:          boolean;
}

export interface SongAttributes {
    albumName?:            string;
    hasTimeSyncedLyrics?:  boolean;
    genreNames:            GenreName[];
    trackNumber?:          number;
    releaseDate:           Date;
    durationInMillis?:     number;
    isMasteredForItunes:   boolean;
    isrc?:                 string;
    artwork:               Artwork;
    composerName?:         ComposerName;
    audioLocale?:          AudioLocale;
    url:                   string;
    playParams:            PlayParams;
    discNumber?:           number;
    isAppleDigitalMaster?: boolean;
    hasLyrics?:            boolean;
    audioTraits:           AudioTrait[];
    name:                  string;
    previews?:             Preview[];
    artistName:            Name;
    copyright?:            string;
    upc?:                  string;
    recordLabel?:          RecordLabel;
    isCompilation?:        boolean;
    trackCount?:           number;
    isPrerelease?:         boolean;
    isSingle?:             boolean;
    editorialNotes?:       FluffyEditorialNotes;
    isComplete?:           boolean;
}

export interface FluffyEditorialNotes {
    short: string;
}

export interface SongMeta {
    formerIds: string[];
}

export interface Track {
    layout:         string;
    type:           string;
    key:            string;
    title:          string;
    subtitle:       string;
    images:         Images;
    share:          Share;
    hub:            Hub;
    sections:       Section[];
    url:            string;
    artists:        Artist[];
    alias:          string;
    isrc:           string;
    genres:         Genres;
    urlparams:      Urlparams;
    highlightsurls: Highlightsurls;
    albumadamid:    string;
    trackadamid:    string;
    releasedate:    string;
}

export interface Section {
    type:        string;
    metapages?:  Metapage[];
    tabname:     string;
    metadata?:   Metadatum[];
    text?:       string[];
    footer?:     string;
    beacondata?: SectionBeacondata;
}

export interface Metapage {
    image:   string;
    caption: string;
}

export interface Metadatum {
    title: string;
    text:  string;
}

export interface SectionBeacondata {
    lyricsid:      string;
    providername:  string;
    commontrackid: string;
}

export interface Genres {
    primary: string;
}

export interface Urlparams {
    "{tracktitle}":  string;
    "{trackartist}": string;
}