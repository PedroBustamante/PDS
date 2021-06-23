
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SignUp from './index';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Teste página SignUp', () => {
  beforeEach(() => {
    render(<Router><SignUp /></Router>)
  })

  test('Teste das Inputs', async () => {
    const nameInput = screen.getByTestId("nameInput");
    fireEvent.change(nameInput, { target: { value: 'Nome Sobrenome' } });
    expect(nameInput.value).toBe('Nome Sobrenome');

    
    const emailInput = screen.getByTestId("emailInput");
    fireEvent.change(emailInput, { target: { value: 'email@gmail.com' } });
    expect(emailInput.value).toBe('email@gmail.com');

    
    const passwordInput = screen.getByTestId("passwordInput");
    fireEvent.change(passwordInput, { target: { value: 'senhalonga' } });
    expect(passwordInput.value).toBe('senhalonga');

    
    const phoneInput = screen.getByTestId("phoneInput");
    fireEvent.change(phoneInput, { target: { value: '31988887777' } });
    expect(phoneInput.value).toBe('31988887777');
  });
});
