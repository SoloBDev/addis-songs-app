/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setSelectedArtist } from "../redux/songs/songsSlice";
import { useThemeToggle } from "../theme/CustomThemeProvider";
import { ThemedProps } from "./ThemeToggle";

const artistData: Record<string, { profile: string }> = {
  "Ed Sheeran": {
    profile: "https://i.ibb.co/zVRfBBqN/ed-pp.jpg",
  },
  "The Weeknd": {
    profile: "https://i.ibb.co/hRD2LZS3/abel-pp.jpg",
  },
  Adele: {
    profile: "https://i.ibb.co/WvL5hVqT/adele-pp.jpg",
  },
  Coldplay: {
    profile: "https://i.ibb.co/WWFNQfgp/cold-pp.jpg",
  },
  "Dua Lipa": {
    profile: "https://i.ibb.co/3m4DFtnZ/dua-pp.jpg",
  },
  "Bruno Mars": {
    profile: "https://i.ibb.co/C5HWkWQ1/bruno-pp.jpg",
  },
  "Taylor Swift": {
    profile: "https://i.ibb.co/DPnN5fht/taylor-pp.jpg",
  },
  Drake: {
    profile: "https://i.ibb.co/SXFcXmkV/barca.jpg",
  },
  "Post Malone": {
    profile: "https://i.ibb.co/nTL5xTd/postM.jpg",
  },
  "Justin Bieber": {
    profile: "https://i.ibb.co/274NmbZ9/justin-pp.jpg",
  },
};
interface Props {
  artists: string[];
  selectedArtist?: string | null;
}

const Sidebar = styled.aside<ThemedProps>`
  width: 180px;
  padding: 1rem 0.75rem;
  background-color: ${({ theme }) => theme.colors.background};
  border-right: 1px solid ${({ theme }) => theme.colors.icon};
  height: 100vh;
  overflow-y: auto;

  @media (max-width: 1024px) {
    display: none;
  }

  @media (min-width: 1024px) {
    display: block;
  }
`;

const SectionTitle = styled.h3<ThemedProps>`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ArtistButton = styled.button<{ active?: boolean } & ThemedProps>`
  background: ${({ active, theme }) =>
    active ? theme.colors.primary : "transparent"};
  color: ${({ active, theme }) =>
    active ? theme.colors.background : theme.colors.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
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

const ProfileImage = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 20%;
  object-fit: cover;
`;

const Name = styled.span`
  margin: 0;
`;

const ArtistFilter: React.FC<Props> = ({ artists, selectedArtist = null }) => {
  const dispatch = useAppDispatch();
  const currentTheme = useThemeToggle();

  const handleArtistClick = (name: string | null) => {
    dispatch(setSelectedArtist(name));
  };

  return (
    <Sidebar theme={currentTheme.currentTheme}>
      <SectionTitle theme={currentTheme.currentTheme}>Artists</SectionTitle>
      <ArtistButton
        theme={currentTheme.currentTheme}
        onClick={() => handleArtistClick(null)}
        active={selectedArtist === null}
      >
        {" "}
        &nbsp;All Songs
      </ArtistButton>
      {artists.map((name) => {
        const profileImages =
          artistData[name]?.profile || "https://i.ibb.co/1Ydnvp4B/taylor.jpg";
        return (
          <ArtistButton
            key={name}
            theme={currentTheme.currentTheme}
            onClick={() => handleArtistClick(name)}
            active={selectedArtist === name}
          >
            {profileImages && (
              <ProfileImage
                src={profileImages}
                alt={`Profile image of ${name}`}
              />
            )}
            <Name>{name}</Name>
          </ArtistButton>
        );
      })}
    </Sidebar>
  );
};

export default ArtistFilter;
