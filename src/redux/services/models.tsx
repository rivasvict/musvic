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
