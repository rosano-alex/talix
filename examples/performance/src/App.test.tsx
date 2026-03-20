// @vitest-environment jsdom
import React from 'react';
import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.queryByText(/learn react/i);
  expect(linkElement).not.toBeNull();
});
