import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSongs,
  Song,
  deleteSong,
  createSong,
  updateSong
} from '../redux/songs/songsSlice';
import { RootState } from '../redux/store';
import SongForm from './SongForm';
import SongItem from './SongItem';

const SongList: React.FC = () => {
  const dispatch = useDispatch();
  const { songs, loading, error } = useSelector((state: RootState) => state.songs);

  const [editSong, setEditSong] = useState<Song | null>(null);

  useEffect(() => {
    dispatch(fetchSongs());
  }, [dispatch]);

  const handleCreateOrUpdate = (song: Omit<Song, 'id'>, id?: number) => {
    if (id) {
      dispatch(updateSong({ id, song }));
    } else {
      dispatch(createSong(song));
    }
    setEditSong(null);
  };

  const handleEdit = (song: Song) => {
    setEditSong(song);
  };

  const handleDelete = (id: number) => {
    dispatch(deleteSong(id));
  };

  return (
    <div>
      <h2>{editSong ? 'Edit Song' : 'Add New Song'}</h2>
      <SongForm onSubmit={handleCreateOrUpdate} initialData={editSong} />
      <h3>All Songs</h3>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {songs.map((song) => (
        <SongItem key={song.id} song={song} onEdit={handleEdit} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default SongList;
