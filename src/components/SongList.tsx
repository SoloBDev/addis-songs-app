/** @jsxImportSource @emotion/react */
import React, { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import {
  fetchSongsStart,
  deleteSongStart,
  createSongStart,
  updateSongStart,
  Song,
} from "../redux/songs/songsSlice";
import { RootState } from "../redux/store";
const SongItem = lazy(() => import("./SongItem"));
const SongForm = lazy(() => import("./SongForm"));

const Container = styled.div`
  padding: 2em;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5em;
`;

const Title = styled.h2`
  font-size: 2em;
  font-weight: bold;
`;

const AddButton = styled.button`
  background-color: #2563eb;
  color: white;
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.375em;
  cursor: pointer;

  &:hover {
    background-color: #1d4ed8;
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 0.5em 1em;
  margin-bottom: 1.5em;
  border: 1px solid #ccc;
  border-radius: 0.375em;
`;

const StatusText = styled.p`
  color: #555;
  margin-bottom: 1em;
  font-size: 0.9em;
`;

const Grid = styled.div`
  display: grid;
  gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const ModalBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBox = styled.div`
  background: white;
  padding: 2em;
  border-radius: 0.5em;
  max-width: 400px;
  margin: 10% auto;
  position: relative;
`;

const ModalButton = styled.button<{ variant?: "cancel" | "confirm" }>`
  padding: 0.5em 1em;
  border: none;
  border-radius: 0.375em;
  margin: 0 0.5em;
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === "cancel" ? "#ccc" : "#dc2626"};
  color: ${(props) => (props.variant === "cancel" ? "#000" : "#fff")};

  &:hover {
    opacity: 0.9;
  }
`;

const SongList: React.FC = () => {
  const dispatch = useDispatch();
  const { songs, loading, error } = useSelector(
    (state: RootState) => state.songs
  );
  const [query, setQuery] = useState("");
  const [editSong, setEditSong] = useState<Song | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchSongsStart());
  }, [dispatch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleCreateOrUpdate = (song: Omit<Song, "id">, id?: string) => {
    if (id) {
      dispatch(updateSongStart({ id, song }));
    } else {
      dispatch(createSongStart(song));
    }
    setEditSong(null);
    setShowForm(false);
  };

  const handleEdit = (song: Song) => {
    setEditSong(song);
    setShowForm(true);
  };

  const handleDeleteConfirm = () => {
    if (deleteId) {
      dispatch(deleteSongStart(deleteId));
      setDeleteId(null);
    }
  };

  const filteredSongs = songs.filter((song) => {
    const search = query.toLowerCase();
    return (
      song.title.toLowerCase().includes(search) ||
      song.artist.toLowerCase().includes(search) ||
      song.genre?.toLowerCase().includes(search)
    );
  });

  return (
    <Container>
      <Header>
        <Title>Songs Library</Title>
        <AddButton
          onClick={() => {
            setEditSong(null);
            setShowForm(true);
          }}
        >
          Add New Song
        </AddButton>
      </Header>

      {showForm && (
        <Suspense fallback={<StatusText>{loading && "Loading songs..."}</StatusText>}>
          <SongForm
            initialData={editSong || undefined}
            onSubmit={handleCreateOrUpdate}
            onCancel={() => {
              setShowForm(false);
              setEditSong(null);
            }}
            isLoading={false}
          />
        </Suspense>
      )}

      <SearchInput
        type='text'
        value={query}
        onChange={handleSearchChange}
        placeholder='Search songs by title, artist or genre...'
      />

      {error && (
        <StatusText style={{ color: "red" }}>Error: {error}</StatusText>
      )}
      <StatusText>Total Songs: {filteredSongs.length}</StatusText>

      {filteredSongs.length > 0 ? (
        <Grid>
          {filteredSongs.map((song) => (
            <Suspense fallback={<StatusText>{loading && "Loading..."}</StatusText>} key={song.id}>
              <SongItem
                key={song.id}
                song={song}
                onEdit={() => handleEdit(song)}
                onDelete={() => setDeleteId(song.id)}
              />
            </Suspense>
          ))}
        </Grid>
      ) : (
        <StatusText>
          {songs.length ? "No songs match your search." : "No songs available."}
        </StatusText>
      )}

      {deleteId && (
        <ModalBackdrop onClick={() => setDeleteId(null)}>
          <ModalBox onClick={(e) => e.stopPropagation()}>
            <p>Are you sure you want to delete this song?</p>
            <div style={{ textAlign: "right", marginTop: "1em" }}>
              <ModalButton variant='cancel' onClick={() => setDeleteId(null)}>
                Cancel
              </ModalButton>
              <ModalButton onClick={handleDeleteConfirm}>Delete</ModalButton>
            </div>
          </ModalBox>
        </ModalBackdrop>
      )}
    </Container>
  );
};

export default SongList;
