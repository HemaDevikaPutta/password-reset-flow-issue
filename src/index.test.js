import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MyComponent from '.';

// eslint-disable-next-line no-undef
test("should render 'test'", () => {
  // eslint-disable-next-line react/jsx-filename-extension
  render(<MyComponent />);
  // eslint-disable-next-line no-undef
  expect(screen.queryByText('test')).toBeInTheDocument();
});
