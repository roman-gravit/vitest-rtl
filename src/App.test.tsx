import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the App component', () => {
    render(<App />)
		const msg = screen.getByText(/hello/i);
		expect(msg).toBeInTheDocument();
  })
})