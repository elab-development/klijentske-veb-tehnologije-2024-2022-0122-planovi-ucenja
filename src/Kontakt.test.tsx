import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Correct import
import Kontakt from './components/Kontakt';

describe('Kontakt Component', () => {
  beforeEach(() => {
    render(<Kontakt />);
  });

  it('should render Kontakt component with Navbar and contact info', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument();

    expect(screen.getByText('example@gmail.com')).toBeInTheDocument();
    expect(screen.getByText('+381 555-333')).toBeInTheDocument();
    expect(screen.getByText('Denver Nuggets Ball Arena')).toBeInTheDocument();
  });

  it('should call alert and reset form on submit', () => {
    window.alert = jest.fn();

    const form = screen.getByTestId('contact-form');
    const submitButton = screen.getByText('Pošalji');

    fireEvent.change(screen.getByPlaceholderText('Vase Ime'), { target: { value: 'John Doe' } });
    fireEvent.change(screen.getByPlaceholderText('Vas broj telefona'), { target: { value: '1234567890' } });
    fireEvent.change(screen.getByPlaceholderText('Unesite Vasu poruku ovde'), { target: { value: 'Test message' } });

    fireEvent.submit(form);

    expect(window.alert).toHaveBeenCalledWith('Vaša poruka je poslata!');

    expect(screen.getByPlaceholderText('Vase Ime')).toHaveValue('');
    expect(screen.getByPlaceholderText('Vas broj telefona')).toHaveValue('');
    expect(screen.getByPlaceholderText('Unesite Vasu poruku ovde')).toHaveValue('');
  });
});
