import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Profile from './index';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Teste página Profile', () => {
  beforeEach(() => {
    render(<Router><Profile /></Router>)
  })

  test('Existência dos componentes', async () => {
    expect(screen.getByRole('logoutButton')).not.toBeDisabled();
  });
});
