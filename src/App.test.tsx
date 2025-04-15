import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App common get/find/query', () => {
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

describe('App fireEvent', () => {
  it('fireEvent Text', async () => {
    render(<App />)
		fireEvent.change(screen.getAllByRole("textbox")[1], {
			target: {value: "React"}
		})

		screen.debug();
		const search = screen.getByTestId("search1");
		expect(search).toBeInTheDocument();

  })

})