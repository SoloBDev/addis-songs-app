import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { Song } from '../redux/songs/songsSlice';

interface SongFormProps {
  onSubmit: (songData: Omit<Song, 'id'>, id?: string) => void;
  initialData?: Song | null;
  onCancel: () => void;
  isLoading: boolean;
}

// Styled components
const FormContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  color: #2d3748;
  font-size: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormField = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-weight: 500;
  color: #4a5568;
`;

const Input = styled.input<{ isLoading: boolean }>`
  width: 100%;
  padding: 8px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  background-color: ${props => props.isLoading ? '#f7fafc' : '#fff'};
`;

const Select = styled.select<{ isLoading: boolean }>`
  width: 100%;
  padding: 8px;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  font-size: 1rem;
  background-color: ${props => props.isLoading ? '#f7fafc' : '#fff'};
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary', isLoading: boolean }>`
  padding: 8px 16px;
  background-color: ${props => props.variant === 'primary' ? '#4299e1' : '#e2e8f0'};
  color: ${props => props.variant === 'primary' ? 'white' : '#4a5568'};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
  opacity: ${props => props.isLoading ? 0.5 : 1};

  &:hover {
    background-color: ${props => 
      props.variant === 'primary' ? '#3182ce' : '#cbd5e0'};
  }
`;

const SongForm: React.FC<SongFormProps> = ({ 
  onSubmit, 
  initialData, 
  onCancel, 
  isLoading 
}) => {
  const [formData, setFormData] = useState<Omit<Song, 'id'>>({
    title: '',
    artist: '',
    album: '',
    year: new Date().getFullYear(),
    genre: '',
    artistImage: ''
  });

  // Initialize form when initialData changes
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
        artistImage: ''
      });
    }
  }, [initialData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'year' ? parseInt(value) || 0 : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData, initialData?.id);
  };

  return (
    <FormContainer>
      <FormTitle>
        {initialData ? 'Edit Song' : 'Add New Song'}
      </FormTitle>
      
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label>Title</Label>
          <Input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            disabled={isLoading}
            isLoading={isLoading}
          />
        </FormField>

        <FormField>
          <Label>Artist</Label>
          <Input
            type="text"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            required
            disabled={isLoading}
            isLoading={isLoading}
          />
        </FormField>

        <FormField>
          <Label>Album</Label>
          <Input
            type="text"
            name="album"
            value={formData.album}
            onChange={handleChange}
            required
            disabled={isLoading}
            isLoading={isLoading}
          />
        </FormField>

        <FormField>
          <Label>Year</Label>
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
          />
        </FormField>

        <FormField>
          <Label>Genre</Label>
          <Select
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            required
            disabled={isLoading}
            isLoading={isLoading}
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
          <Label>Artist Image URL</Label>
          <Input
            type="url"
            name="artistImage"
            value={formData.artistImage}
            onChange={handleChange}
            disabled={isLoading}
            isLoading={isLoading}
          />
        </FormField>

        <ButtonGroup>
          <Button
            type="button"
            onClick={onCancel}
            disabled={isLoading}
            isLoading={isLoading}
            variant="secondary"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isLoading}
            isLoading={isLoading}
            variant="primary"
          >
            {isLoading ? 'Processing...' : initialData ? 'Update Song' : 'Add Song'}
          </Button>
        </ButtonGroup>
      </Form>
    </FormContainer>
  );
};

export default SongForm;