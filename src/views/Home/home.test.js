import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Home from './index';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Teste página Home', () => {
  beforeEach(() => {
    render(<Router><Home /></Router>)
  })

  test('Funcionamento dos botões', async () => {
    expect(screen.getByRole('loginButton')).not.toBeDisabled();
    expect(screen.getByRole('signupButton')).not.toBeDisabled();
  });
});
