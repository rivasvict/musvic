import { createSlice } from "@reduxjs/toolkit";
import { Song } from "../types";

interface IFavorite {
  favoriteSongs: Song[];
}

const initialState: IFavorite = {
  favoriteSongs: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite(state, action) {
      const { song } = action.payload;
      state.favoriteSongs.push(song);
    },
    removeFavorite(state, action) {
      const { key } = action.payload;
      state.favoriteSongs = state.favoriteSongs.filter(
        (song) => song.key !== key
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
