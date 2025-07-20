import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Song {
  id: number;
  title: string;
  artist: string;
  album: string;
  year: number;
  genre: string;
  artistImage: string;
}

interface SongsState {
  songs: Song[];
  loading: boolean;
  error: string | null;
}

const initialState: SongsState = {
  songs: [],
  loading: false,
  error: null
};

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {
    fetchSongs: (state) => {
      state.loading = true;
    },
    fetchSongsSuccess: (state, action: PayloadAction<Song[]>) => {
      state.songs = action.payload;
      state.loading = false;
    },
    fetchSongsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    }
    // We'll add create/update/delete actions later
  }
});

export const {
  fetchSongs,
  fetchSongsSuccess,
  fetchSongsFailure
} = songsSlice.actions;

export default songsSlice.reducer;
