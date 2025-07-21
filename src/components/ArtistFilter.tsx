// ArtistFilter.tsx
import { useAppDispatch } from "../redux/hooks";
import { setSelectedArtist } from "../redux/songs/songsSlice";

const ArtistFilter = ({ artists }: { artists: string[] }) => {
  const dispatch = useAppDispatch();

  const handleArtistClick = (name: string) => {
    dispatch(setSelectedArtist(name)); // ✅ dispatch on click
  };

  return (
    <div className="space-y-2">
      <button
        onClick={() => dispatch(setSelectedArtist(null))}
        className="px-3 py-1 bg-gray-300 rounded"
      >
        All Songs
      </button>
      {artists.map((name) => (
        <button
          key={name}
          onClick={() => handleArtistClick(name)}
          className="px-3 py-1 bg-blue-300 rounded block"
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default ArtistFilter;
