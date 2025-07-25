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
import { useThemeToggle } from "../theme/CustomThemeProvider";

const SongItem = lazy(() => import("./SongItem"));
const SongForm = lazy(() => import("./SongForm"));

const Container = styled.div`
  padding: 2em 1em;
  margin-top: -3em;
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

interface SongListProps {
  query: string;
  showForm: boolean;
  onFormClose: () => void;
}

const SongList: React.FC<SongListProps> = ({ query, showForm, onFormClose }) => {
  const dispatch = useDispatch();
  const selectedArtist = useSelector(
    (state: RootState) => state.songs.selectedArtist
  );

  const { songs, loading, error } = useSelector(
    (state: RootState) => state.songs
  );

  const [editSong, setEditSong] = useState<Song | null>(null);
  const [deleteId, setDeleteId] = useState<string | null>(null);

  useEffect(() => {
    dispatch(fetchSongsStart());
  }, [dispatch]);

  const handleCreateOrUpdate = (song: Omit<Song, "id">, id?: string) => {
    if (id) {
      dispatch(updateSongStart({ id, song }));
    } else {
      dispatch(createSongStart(song));
    }
    setEditSong(null);
    onFormClose();
  };

  const handleEdit = (song: Song) => {
    setEditSong(song);
    
    onFormClose();
  };

  const handleDeleteConfirm = () => {
    if (deleteId) {
      dispatch(deleteSongStart(deleteId));
      setDeleteId(null);
    }
  };

  const filteredSongs = songs
    .filter((song) => (selectedArtist ? song.artist === selectedArtist : true))
    .filter((song) => {
      const search = query.toLowerCase();
      return (
        song.title.toLowerCase().includes(search) ||
        song.artist.toLowerCase().includes(search) ||
        song.genre?.toLowerCase().includes(search)
      );
    });

  const currentTheme = useThemeToggle();

  return (
    <Container>
      {(showForm || editSong) && (
        <Suspense
          fallback={<StatusText>{loading && "Loading songs..."}</StatusText>}
        >
          <SongForm
            initialData={editSong || undefined}
            onSubmit={handleCreateOrUpdate}
            onCancel={() => {
              onFormClose();
              setEditSong(null);
            }}
            isLoading={false}
          />
        </Suspense>
      )}

      {error && (
        <StatusText style={{ color: "red" }}>Error: {error}</StatusText>
      )}
      <StatusText>Total Songs: {filteredSongs.length}</StatusText>

      {filteredSongs.length > 0 ? (
        <Grid>
          {filteredSongs.map((song) => (
            <Suspense
              fallback={<StatusText>{loading && "Loading..."}</StatusText>}
              key={song.id}
            >
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
              <ModalButton variant="cancel" onClick={() => setDeleteId(null)}>
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