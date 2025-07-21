/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useAppDispatch } from "../redux/hooks";
import { setSelectedArtist } from "../redux/songs/songsSlice";
import { useThemeToggle } from "../theme/CustomThemeProvider";
import { ThemedProps } from './ThemeToggle';

interface Props {
  artists: string[];
  selectedArtist?: string | null;
}

const Sidebar = styled.aside<ThemedProps>`
  width: 220px;
  padding: 1rem 0.75rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-right: 1px solid ${({ theme }) => theme.colors.icon};
  height: 100vh;
  overflow-y: auto;
`;

const SectionTitle = styled.h3<ThemedProps>`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ArtistButton = styled.button<{ active?: boolean;} & ThemedProps>`
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : "transparent"};
  color: ${({ active, theme }) =>
    active ? theme.colors.background : theme.colors.text};
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 0.75rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  border: none;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ active, theme }) =>
      active ? theme.colors.primary : theme.colors.icon + "33"};
  }
`;

const ArtistFilter = ({ artists, selectedArtist }: Props) => {
  const dispatch = useAppDispatch();
  const currentTheme = useThemeToggle();

  const handleArtistClick = (name: string | null) => {
    dispatch(setSelectedArtist(name));
  };

  return (
    <Sidebar theme={currentTheme.currentTheme}>
      <SectionTitle theme={currentTheme.currentTheme}>Artists</SectionTitle>
      <ArtistButton theme={currentTheme.currentTheme}
        onClick={() => handleArtistClick(null)}
        active={selectedArtist === null}
      >
        All Songs
      </ArtistButton>
      {artists.map((name) => (
        <ArtistButton
          theme={currentTheme.currentTheme}
          key={name}
          onClick={() => handleArtistClick(name)}
          active={selectedArtist === name}
        >
          {name}
        </ArtistButton>
      ))}
    </Sidebar>
  );
};

export default ArtistFilter;
