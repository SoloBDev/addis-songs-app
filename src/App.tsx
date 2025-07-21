import { useSelector } from "react-redux";
import ArtistFilter from "./components/ArtistFilter";
import { SongBanner } from "./components/SongBanner";
import SongList from "./components/SongList";
import { NavBar } from "./components/NavBar";
import "./styles.css";
import { RootState } from "./redux/store";
import { useAppSelector } from "./redux/hooks";
import { useState } from "react";
import styled from "@emotion/styled";

const GridLayout = styled.div`
  display: grid;
  grid-template-areas:
    "nav"
    "main";

  grid-template-columns: 1fr;
  overflow: hidden;
  scroll-behavior: smooth;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
  }

  

  @media (min-width: 1024px) {
    grid-template-areas:
      "nav nav"
      "aside main";
    grid-template-columns: 200px 1fr;
    gap: 1em;
  }
`;

const GridItem = styled.div<{ area: string }>`
  grid-area: ${({ area }) => area};
  overflow: hidden;
  scrollbar-width: none;
  scrollbar-color: transparent transparent;
`;

const App = () => {
  const selectedArtist = useAppSelector((state) => state.songs.selectedArtist);
  const songs = useSelector((state: RootState) => state.songs.songs);
  const [query, setQuery] = useState("");
  const [showForm, setShowForm] = useState(false);

  const uniqueArtists = [...new Set(songs.map((s) => s.artist))];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleAddClick = () => {
    setShowForm(true);
  };

  return (
    <>
      <SongBanner />
      <GridLayout>
        <GridItem area='nav'>
          <NavBar
            title='Songs Library'
            query={query}
            onSearchChange={handleSearchChange}
            onAddClick={handleAddClick}
            searchPlaceholder='Search songs by title, artist or genre...'
          />
        </GridItem>

        <GridItem area='aside'>
          <ArtistFilter
            artists={uniqueArtists}
            selectedArtist={selectedArtist}
          />
        </GridItem>

        <GridItem area='main'>
          <SongList
            query={query}
            showForm={showForm}
            onFormClose={() => setShowForm(false)}
          />
        </GridItem>
      </GridLayout>
    </>
  );
};

export default App;
