import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  fetchSongs,
  fetchSongsSuccess,
  fetchSongsFailure
} from './songsSlice';
import { Song } from './songsSlice';

const BASE_URL = process.env.API_BASE_URL || '';

function fetchSongsFromAPI() {
  return axios.get<Song[]>(`${BASE_URL}/users`);
}

function* handleFetchSongs(): Generator<any, void, any> {
  try {
    const response = yield call(fetchSongsFromAPI);
    yield put(fetchSongsSuccess(response.data));
  } catch (error: any) {
    yield put(fetchSongsFailure(error.message));
  }
}

export default function* rootSaga() {
  yield takeLatest(fetchSongs.type, handleFetchSongs);
}
