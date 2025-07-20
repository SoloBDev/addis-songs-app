// songsSaga.ts
import { call, put, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsFailure,
  createSongStart,
  createSongSuccess,
  createSongFailure,
  updateSongStart,
  updateSongSuccess,
  updateSongFailure,
  deleteSongStart,
  deleteSongSuccess,
  deleteSongFailure
} from './songsSlice';
import type { Song } from './songsSlice';

const API_URL = '/api/songs';

// Helper function for error handling
function* handleError(error: unknown, failureAction: any) {
  if (axios.isAxiosError(error)) {
    yield put(failureAction(error.response?.data?.message || error.message));
  } else if (error instanceof Error) {
    yield put(failureAction(error.message));
  } else {
    yield put(failureAction('An unknown error occurred'));
  }
}

// Fetch Songs
function* fetchSongsSaga() {
  try {
    const { data }: { data: Song[] } = yield call(axios.get, API_URL);
    yield put(fetchSongsSuccess(data));
  } catch (error) {
    yield* handleError(error, fetchSongsFailure);
  }
}

// Create Song
function* createSongSaga(action: ReturnType<typeof createSongStart>): Generator<any, void, any> {
  try {
    const response = yield call(() => axios.post(API_URL, action.payload));
    yield put(createSongSuccess(response.data.song));
    // // Optionally refetch songs after creation
    // yield put(fetchSongsStart());
  } catch (error) {
    yield* handleError(error, createSongFailure);
  }
}

// Update Song
function* updateSongSaga(action: ReturnType<typeof updateSongStart>) {
  try {
    const { id, song } = action.payload;
    const { data }: { data: Song } = yield call(axios.put, `${API_URL}/${id}`, song);
    yield put(updateSongSuccess(data));
  } catch (error) {
    yield* handleError(error, updateSongFailure);
  }
}

// Delete Song
function* deleteSongSaga(action: ReturnType<typeof deleteSongStart>) {
  try {
    yield call(axios.delete, `${API_URL}/${action.payload}`);
    yield put(deleteSongSuccess(action.payload));
  } catch (error) {
    yield* handleError(error, deleteSongFailure);
  }
}

export default function* songsSaga() {
  yield all([
    takeLatest(fetchSongsStart.type, fetchSongsSaga),
    takeLatest(createSongStart.type, createSongSaga),
    takeLatest(updateSongStart.type, updateSongSaga),
    takeLatest(deleteSongStart.type, deleteSongSaga)
  ]);
}