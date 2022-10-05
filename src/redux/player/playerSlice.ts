import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'redux/store';
import type { WorldChartResponse } from 'interface';

interface playerState {
  currentSongs: any[];
  currentIndex: number;
  isActive: boolean;
  isPlaying: boolean;
  activeSong: WorldChartResponse | undefined;
  genreListId: string;
}

const initialState: playerState = {
  activeSong: undefined,
  currentIndex: 0,
  currentSongs: [],
  genreListId: '',
  isActive: false,
  isPlaying: false,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setActiveSong: (
      state,
      action: PayloadAction<{
        song: WorldChartResponse;
        data?: any;
        i: number;
      }>
    ) => {
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
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    prevSong: (state, action) => {
      if (state.currentSongs[action.payload]?.track) {
        state.activeSong = state.currentSongs[action.payload]?.track;
      } else {
        state.activeSong = state.currentSongs[action.payload];
      }

      state.currentIndex = action.payload;
      state.isActive = true;
    },

    playPause: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },

    selectGenreListId: (state, action: PayloadAction<string>) => {
      state.genreListId = action.payload;
    },
  },
});

export const {
  nextSong,
  playPause,
  prevSong,
  selectGenreListId,
  setActiveSong,
} = playerSlice.actions;

export const selectIsPlaying = (state: RootState) => state.player.isPlaying;
export const selectIsActive = (state: RootState) => state.player.isActive;
export const selectActiveSong = (state: RootState) => state.player.activeSong;
export const selectGenreListIdState = (state: RootState) =>
  state.player.genreListId;
export const selectCurrentIndex = (state: RootState) =>
  state.player.currentIndex;

export default playerSlice.reducer;
