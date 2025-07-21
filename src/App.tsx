import { useSelector } from "react-redux";
import ArtistFilter from "./components/ArtistFilter";
import { SongBanner } from "./components/SongBanner";
import SongList from "./components/SongList";
import { NavBar } from "./components/NavBar"; // Import the NavBar
import "./styles.css";
import { RootState } from "./redux/store";
import { useAppSelector } from "./redux/hooks";
import { useState } from "react";

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
    <div>
      <SongBanner />
      <NavBar
        title='Songs Library'
        query={query}
        onSearchChange={handleSearchChange}
        onAddClick={handleAddClick}
        searchPlaceholder='Search songs by title, artist or genre...'
      />

      <ArtistFilter artists={uniqueArtists} selectedArtist={selectedArtist} />
      
      <SongList
        query={query}
        showForm={showForm}
        onFormClose={() => setShowForm(false)}
      />
    </div>
  );
};

export default App;
