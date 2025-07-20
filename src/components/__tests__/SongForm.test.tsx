import { render, screen, fireEvent } from '@testing-library/react';
import SongForm from '../SongForm';

test('renders SongForm and submits', () => {
  const onSubmitMock = jest.fn();
  render(<SongForm onSubmit={onSubmitMock} onCancel={function (): void {
     throw new Error('Function not implemented.');
  } } isLoading={false} />);
  
  fireEvent.change(screen.getByLabelText(/title/i), {
    target: { value: 'New Song' },
  });

  fireEvent.submit(screen.getByRole('form'));

  expect(onSubmitMock).toHaveBeenCalled();
});