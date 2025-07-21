import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Song {
  id: string; // Changed to string to match MirageJS
  title: string;
  artist: string;
  album: string;
  artistImage?: string;
  year: number;
  genre: string;
  views?: string; // Optional field for views
}

interface SongsState {
  songs: Song[];
  filteredSongs?: Song[];
  loading: boolean;
  error: string | null;
  lastFetch: number | null;
  currentSong: Song | null;
  selectedArtist?: string | null;
}

const initialState: SongsState = {
  songs: [],
  filteredSongs: [],
  loading: false,
  error: null,
  lastFetch: null,
  currentSong: null,
  selectedArtist: null,
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    // Fetch actions
    fetchSongsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchSongsSuccess: (state, action: PayloadAction<Song[]>) => {
      state.songs = action.payload;
      state.loading = false;
      state.lastFetch = Date.now();
    },
    fetchSongsFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    //handle filtering
    filterSongsByArtist: (state, action: PayloadAction<string>) => {
      const artist = action.payload;
      state.filteredSongs = state.songs.filter(
        (song) => song.artist === artist
      );
    },
    clearArtistFilter: (state) => {
      state.filteredSongs = state.songs;
    },
    setSelectedArtist: (state, action: PayloadAction<string | null>) => {
      state.selectedArtist = action.payload;
    },

    // Create actions
    createSongStart: (state, _action: PayloadAction<Omit<Song, "id">>) => {
      state.loading = true;
      state.error = null;
    },
    createSongSuccess: (state, action: PayloadAction<Song>) => {
      state.songs.push(action.payload);
      state.loading = false;
    },
    createSongFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Update actions
    updateSongStart: (
      state,
      _action: PayloadAction<{ id: string; song: Omit<Song, "id"> }>
    ) => {
      state.loading = true;
      state.error = null;
    },
    updateSongSuccess: (state, action: PayloadAction<Song>) => {
      const index = state.songs.findIndex((s) => s.id === action.payload.id);
      if (index !== -1) {
        state.songs[index] = action.payload;
      }
      state.loading = false;
    },
    updateSongFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },

    // Delete actions
    deleteSongStart: (state, _action: PayloadAction<string>) => {
      state.loading = true;
      state.error = null;
    },
    deleteSongSuccess: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter((song) => song.id !== action.payload);
      state.loading = false;
    },
    deleteSongFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },

    // Set current song
    setCurrentSong: (state, action: PayloadAction<Song | null>) => {
      state.currentSong = action.payload;
    },

    // Reset state
    resetSongsState: () => initialState,
  },
});

export const {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  filterSongsByArtist,
  clearArtistFilter,
  setSelectedArtist,
  createSongStart,
  createSongSuccess,
  createSongFailure,
  updateSongStart,
  updateSongSuccess,
  updateSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure,
  setCurrentSong,
  resetSongsState,
} = songsSlice.actions;

export default songsSlice.reducer;
