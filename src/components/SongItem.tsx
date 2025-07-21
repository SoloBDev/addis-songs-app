import React from "react";
import styled from "@emotion/styled";
import { Song } from "../redux/songs/songsSlice";
import { ThemeType } from "../../theme";
import { useThemeToggle } from "../theme/CustomThemeProvider";

interface Props {
  song: Song;
  onEdit: (song: Song) => void;
  onDelete: (id: string) => void;
  isProcessing?: boolean;
}

const SongCard = styled.div<{ isProcessing?: boolean; theme: ThemeType }>`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  transition: box-shadow 0.2s ease, opacity 0.2s ease;
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

const SongTitle = styled.h3<{ theme: ThemeType }>`
  margin: 0 0 6px;
  font-size: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

const SongDetail = styled.p<{ theme: ThemeType }>`
  margin: 2px 0;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.icon};
`;

const ActionButtons = styled.div`
  margin-top: 12px;
  display: flex;
  gap: 10px;
`;

const ActionButton = styled.button<{ theme: ThemeType }>`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.text};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.background};
    cursor: not-allowed;
  }
`;

const BottomDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SongItem: React.FC<Props> = ({
  song,
  onEdit,
  onDelete,
  isProcessing,
}) => {
  const { currentTheme } = useThemeToggle();

  return (
    <SongCard isProcessing={isProcessing} theme={currentTheme}>
      {song.artistImage && (
        <ArtistImage src={song.artistImage} alt={`${song.artist}'s image`} />
      )}

      <SongTitle theme={currentTheme}>
        {song.title}{" "}
        <span style={{ fontWeight: "normal" }}>by {song.artist}</span>
      </SongTitle>

      <SongDetail theme={currentTheme}>
        <strong>Genre:</strong> {song.genre}
      </SongDetail>
      <SongDetail theme={currentTheme}>
        <strong>Album:</strong> {song.album}
      </SongDetail>
      <SongDetail theme={currentTheme}>
        <strong>Year:</strong> {song.year}
      </SongDetail>

      <BottomDetail>
        <ActionButtons>
          <ActionButton
            onClick={() => onEdit(song)}
            disabled={isProcessing}
            theme={currentTheme}
          >
            Edit
          </ActionButton>
          <ActionButton
            onClick={() => onDelete(song.id)}
            disabled={isProcessing}
            theme={currentTheme}
          >
            Delete
          </ActionButton>
        </ActionButtons>
        <SongDetail theme={currentTheme}>
          <strong> {song.views?.toLocaleString() ?? 0} </strong>{" "}views
        </SongDetail>
      </BottomDetail>
    </SongCard>
  );
};

export default SongItem;
