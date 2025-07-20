import React from 'react';
import styled from '@emotion/styled';
import { Song } from '../redux/songs/songsSlice';

interface Props {
  song: Song;
  onEdit: (song: Song) => void;
  onDelete: (id: string) => void;
  isProcessing?: boolean;
}

const SongCard = styled.div<{ isProcessing?: boolean }>`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fdfdfd;
  transition: box-shadow 0.2s;
  position: relative;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  opacity: ${({ isProcessing }) => (isProcessing ? 0.5 : 1)};
`;

const ArtistImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 12px;
`;

const SongTitle = styled.h3`
  margin: 0 0 6px;
  font-size: 20px;
  font-weight: bold;
`;

const SongDetail = styled.p`
  margin: 2px 0;
  font-size: 14px;
  color: #444;
`;

const ActionButtons = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background-color: #0077cc;
  color: #fff;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background-color: #005fa3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const SongItem: React.FC<Props> = ({ song, onEdit, onDelete, isProcessing }) => {
  return (
    <SongCard isProcessing={isProcessing}>
      {song.artistImage && (
        <ArtistImage src={song.artistImage} alt={`${song.artist}'s image`} />
      )}

      <SongTitle>
        {song.title} <span style={{ fontWeight: 'normal' }}>by {song.artist}</span>
      </SongTitle>

      <SongDetail><strong>Genre:</strong> {song.genre}</SongDetail>
      <SongDetail><strong>Album:</strong> {song.album}</SongDetail>
      <SongDetail><strong>Year:</strong> {song.year}</SongDetail>

      <ActionButtons>
        <ActionButton onClick={() => onEdit(song)} disabled={isProcessing}>
          Edit
        </ActionButton>
        <ActionButton onClick={() => onDelete(song.id)} disabled={isProcessing}>
          Delete
        </ActionButton>
      </ActionButtons>
    </SongCard>
  );
};

export default SongItem;
