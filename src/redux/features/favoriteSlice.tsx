import { createSlice } from "@reduxjs/toolkit";
import { Song } from "../types";

interface IFavorite {
  favoriteSongs: string[];
}

const initialState: IFavorite = {
  favoriteSongs: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addFavorite(state, action) {
      const songKey = action.payload;
      state.favoriteSongs.push(songKey);
    },
    removeFavorite(state, action) {
      const songKey = action.payload;
      state.favoriteSongs = state.favoriteSongs.filter(
        (key) => songKey !== key
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
