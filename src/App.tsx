import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSongs } from './redux/songs/songsSlice';
import { RootState } from './redux/store';
import SongList from './components/SongList';

const App = () => {
  const dispatch = useDispatch();
  const { songs, loading, error } = useSelector((state: RootState) => state.songs);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  return (
    <div>
      <h1>🎵 Addis Songs</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {/* <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.name} - {song.username}
          </li>
        ))}
      </ul> */}
      <SongList />
    </div>
  );
};

export default App;
