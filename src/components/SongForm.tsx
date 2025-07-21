import styled from '@emotion/styled';
import React, { useState, useEffect } from 'react';
import { Song } from '../redux/songs/songsSlice';
import { ThemeType } from '../../theme';
import { useThemeToggle } from '../theme/CustomThemeProvider';

interface SongFormProps {
  onSubmit: (songData: Omit<Song, 'id'>, id?: string) => void;
  initialData?: Song | null;
  onCancel: () => void;
  isLoading: boolean;
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(6px);
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 999; /* on top */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div<{ theme: ThemeType }>`
  background-color: ${({ theme }) => theme.colors.background};
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 24px;
  max-width: 500px;
  width: 90vw;
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
  color: ${({ theme }) => theme.colors.text};
  position: relative;
`;

const FormTitle = styled.h2<{ theme: ThemeType }>`
  margin-top: 0;
  margin-bottom: 20px;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label<{ theme: ThemeType }>`
  display: block;
  margin-bottom: 4px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input<{ isLoading: boolean; theme: ThemeType }>`
  width: 100%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.icon};
  border-radius: 4px;
  font-size: 1rem;
  background-color: ${({ isLoading, theme }) => (isLoading ? theme.colors.inputBg : theme.colors.inputBg)};
  color: ${({ theme }) => theme.colors.text};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.text};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.text}55;
  }
`;

const Select = styled.select<{ isLoading: boolean; theme: ThemeType }>`
  width: 100%;
  padding: 8px;
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: 4px;
  font-size: 1rem;
  background-color: ${({ isLoading, theme }) => (isLoading ? theme.colors.inputBg : theme.colors.inputBg)};
  color: ${({ theme }) => theme.colors.primary};
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.text};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.text}55;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary'; isLoading: boolean; theme: ThemeType }>`
  padding: 8px 16px;
  background-color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.text : theme.colors.text};
  color: ${({ variant, theme }) =>
    variant === 'primary' ? theme.colors.primary : theme.colors.primary};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  opacity: ${({ isLoading }) => (isLoading ? 0.5 : 1)};
  &:hover {
    background-color: ${({ variant, theme }) =>
      variant === 'primary' ? theme.colors.icon : theme.colors.icon};
  }
`;

// The component itself:
const SongForm: React.FC<SongFormProps> = ({ onSubmit, initialData, onCancel, isLoading }) => {
  const [formData, setFormData] = useState<Omit<Song, 'id'>>({
    title: '',
    artist: '',
    album: '',
    year: new Date().getFullYear(),
    genre: '',
    artistImage: '',
  });

  useEffect(() => {
    if (initialData) {
      const { id, ...rest } = initialData;
      setFormData(rest);
    } else {
      setFormData({
        title: '',
        artist: '',
        album: '',
        year: new Date().getFullYear(),
        genre: '',
        artistImage: '',
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'year' ? parseInt(value) || 0 : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData, initialData?.id);
  };

  const { currentTheme } = useThemeToggle();


  return (
    <Overlay theme={currentTheme} onClick={onCancel}>
      <ModalContainer theme={currentTheme} onClick={(e) => e.stopPropagation()}>
        <FormTitle theme={currentTheme}>{initialData ? 'Edit Song' : 'Add New Song'}</FormTitle>
        <Form onSubmit={handleSubmit}>
          <FormField>
            <Label theme={currentTheme}>Title</Label>
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              disabled={isLoading}
              isLoading={isLoading}
              theme={currentTheme}
            />
          </FormField>
          <FormField>
            <Label theme={currentTheme}>Artist</Label>
            <Input
              type="text"
              name="artist"
              value={formData.artist}
              onChange={handleChange}
              required
              disabled={isLoading}
              isLoading={isLoading}
              theme={currentTheme}
            />
          </FormField>
          <FormField>
            <Label theme={currentTheme}>Album</Label>
            <Input
              type="text"
              name="album"
              value={formData.album}
              onChange={handleChange}
              required
              disabled={isLoading}
              isLoading={isLoading}
              theme={currentTheme}
            />
          </FormField>
          <FormField>
            <Label theme={currentTheme}>Year</Label>
            <Input
              type="number"
              name="year"
              value={formData.year}
              onChange={handleChange}
              min="1900"
              max={new Date().getFullYear()}
              required
              disabled={isLoading}
              isLoading={isLoading}
              theme={currentTheme}
            />
          </FormField>
          <FormField>
            <Label theme={currentTheme}>Genre</Label>
            <Select
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
              disabled={isLoading}
              isLoading={isLoading}
              theme={currentTheme}
            >
              <option value="">Select a genre</option>
              <option value="Pop">Pop</option>
              <option value="Rock">Rock</option>
              <option value="R&B">R&B</option>
              <option value="Hip-Hop">Hip-Hop</option>
              <option value="Electronic">Electronic</option>
              <option value="Jazz">Jazz</option>
              <option value="Country">Country</option>
            </Select>
          </FormField>
          <FormField>
            <Label theme={currentTheme}>Artist Image URL</Label>
            <Input
              type="url"
              name="artistImage"
              value={formData.artistImage}
              onChange={handleChange}
              disabled={isLoading}
              isLoading={isLoading}
              theme={currentTheme}
            />
          </FormField>
          <ButtonGroup>
            <Button
              type="button"
              onClick={onCancel}
              disabled={isLoading}
              isLoading={isLoading}
              variant="secondary"
              theme={currentTheme}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading} isLoading={isLoading} variant="primary" theme={currentTheme}>
              {isLoading ? 'Processing...' : initialData ? 'Update Song' : 'Add Song'}
            </Button>
          </ButtonGroup>
        </Form>
      </ModalContainer>
    </Overlay>
  );
};

export default SongForm;
