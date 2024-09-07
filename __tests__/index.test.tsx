import { render, screen } from '@testing-library/react';
import Home from '../app/page';

test('renders landing page', () => {
  render(<Home />);
  const heading = screen.getByText(/Pype AI/i);
  expect(heading).toBeInTheDocument();
});
