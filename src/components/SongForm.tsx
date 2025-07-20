import React from 'react';
import { Song } from '../redux/songs/songsSlice';

interface Props {
  song: Song;
  onEdit: (song: Song) => void;
  onDelete: (id: number) => void;
}

const SongItem: React.FC<Props> = ({ song, onEdit, onDelete }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '10px' }}>
      <p>
        <strong>{song.title}</strong> by {song.artist}
      </p>
      <p>
        Album: {song.album}, Year: {song.year}
      </p>
      <button onClick={() => onEdit(song)}>Edit</button>{' '}
      <button onClick={() => onDelete(song.id)}>Delete</button>
    </div>
  );
};

export default SongItem;
