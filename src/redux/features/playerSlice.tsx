import { createSlice } from '@reduxjs/toolkit';
import { Song } from '../types';

export interface IPlayer {
  currentSongs: Song[],
  currentIndex: number,
  isActive: boolean,
  isPlaying: boolean,
  activeSong?: Song,
  genreListId: string
};

const initialState: IPlayer = {
  currentSongs: [],
  currentIndex: 0,
  isActive: false,
  isPlaying: false,
  genreListId: '',
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (state, action) => {
      state.activeSong = action.payload.song;

      if (action.payload?.data?.tracks?.hits) {
        state.currentSongs = action.payload.data.tracks.hits;
      } else if (action.payload?.data?.properties) {
        state.currentSongs = action.payload?.data?.tracks;
      } else {
        state.currentSongs = action.payload.data;
      }

      state.currentIndex = action.payload.i;
      state.isActive = true;
    },

    nextSong: (state, action) => {
      /**
       * TODO: Remember to add a proper data to 
       * (state.currentSongs[action.payload] as any)
       */
      if ((state.currentSongs[action.payload] as any)?.track) {
        /**
         * TODO: Remember to add a proper data to 
         * (state.currentSongs[action.payload] as any)
         */
        state.activeSong = (state.currentSongs[action.payload] as any)?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      /**
       * TODO: Remember to add a proper data to 
       * (state.currentSongs[action.payload] as any)
       */
      if ((state.currentSongs[action.payload] as any)?.track) {
        /**
         * TODO: Remember to add a proper data to 
         * (state.currentSongs[action.payload] as any)
         */
        state.activeSong = (state.currentSongs[action.payload] as any)?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action) => {
      state.genreListId = action.payload;
    },
  },
});

export const { setActiveSong, nextSong, prevSong, playPause, selectGenreListId } = playerSlice.actions;

export default playerSlice.reducer;
