import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('get by Text', () => {
    render(<App />)
		const msg = screen.getByText(/hello/i);
		expect(msg).toBeInTheDocument();
  })

	it('find async', async () => {
		render(<App />);
		const div = await screen.findByText("async");
		expect(div).toBeInTheDocument();
	})

	it('get role', () => {
		render(<App />);
		const heading = screen.getByRole("heading");
		expect(heading).toBeInTheDocument();
	})

	it('get Alt', () => {
		render(<App />);
		const img = screen.getByAltText(/alt text/i);
		expect(img).toBeInTheDocument();
	})

	it('get placeholder', () => {
		render(<App />);
		const place = screen.getByPlaceholderText(/user/i);
		expect(place).toBeInTheDocument();
	})
})