import { render, screen ,fireEvent } from '@testing-library/react';
import App from './App';

test('adds and deletes note', () => {
  render(<App />);
   fireEvent.change(screen.getByPlaceholderText(/enter note/i),{
    target:{value:"New Note"}
   });
   fireEvent.click(screen.getByText(/add/i));
   expect(screen.getByText(/new note/i)).toBeInTheDocument();
   fireEvent.click(screen.getByText(/delete/i));
   expect(screen.queryByText(/new note/i)).not.toBeInTheDocument();
});
