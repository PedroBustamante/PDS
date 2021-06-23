import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './index';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Teste página Login', () => {
  beforeEach(() => {
    render(<Router><Login /></Router>)
  })
  test('Existência dos componentes', async () => {
    
    expect(screen.getByRole('loginButton')).not.toBeDisabled()
    expect(screen.getByRole('signupButton')).not.toBeDisabled()

    expect(screen.getByRole('emailInput').value).toBe(undefined);
    expect(screen.getByRole('passwordInput').value).toBe(undefined);
  });

  test('Test Input', async () => {
    const loginInput = screen.getByTestId("loginInput");
    fireEvent.change(loginInput, { target: { value: 'username' } });
    expect(loginInput.value).toBe('username');

    const passwordInput = screen.getByTestId("passwordInput");
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    expect(passwordInput.value).toBe('password');
  });
});
