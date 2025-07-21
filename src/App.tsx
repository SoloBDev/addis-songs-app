import { useSelector } from "react-redux";
import ArtistFilter from "./components/ArtistFilter";
import { SongBanner } from "./components/SongBanner";
import SongList from "./components/SongList";
import "./styles.css";
import { RootState } from "./redux/store";
import { useAppSelector } from "./redux/hooks";

const App = () => {
  const selectedArtist = useAppSelector((state) => state.songs.selectedArtist);

   const songs = useSelector((state: RootState) => state.songs.songs);
  const uniqueArtists = [...new Set(songs.map((s) => s.artist))];
  return (
    <div>
      <SongBanner />
      <ArtistFilter artists={uniqueArtists} selectedArtist={selectedArtist}  />
      <SongList />
    </div>
  );
};

export default App;
