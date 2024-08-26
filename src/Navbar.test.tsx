import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import Navbar from './components/Navbar'

const localStorageMock: {
  getItem: jest.Mock<string | null, [string]>;
  setItem: jest.Mock<void, [string, string]>;
  clear: jest.Mock<void>;
  removeItem: jest.Mock<void, [string]>;
} = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: jest.fn((key: string) => store[key] || null),
    setItem: jest.fn((key: string, value: string) => { store[key] = value; }),
    clear: jest.fn(() => { store = {}; }),
    removeItem: jest.fn((key: string) => { delete store[key]; }),
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

describe('Navbar Component', () => {
  beforeEach(() => {

    localStorageMock.setItem('loggedInUser', JSON.stringify({ username: 'testuser' }));
  });

  afterEach(() => {

    localStorageMock.clear();
  });

  test('should render Navbar with all links', () => {
    render(<Navbar />);

    expect(screen.getByText('POCETNA')).toBeInTheDocument();
    expect(screen.getByText('PLANOVI')).toBeInTheDocument();
    expect(screen.getByText('ISPITNI ROKOVI')).toBeInTheDocument();
    expect(screen.getByText('PREDMETI')).toBeInTheDocument();
    expect(screen.getByText('KONTAKT')).toBeInTheDocument();
    expect(screen.getByText('PROFIL')).toBeInTheDocument();
    expect(screen.getByText('ODJAVA')).toBeInTheDocument();
  });

  test('should call logout function and remove user from localStorage', () => {
    render(<Navbar />);
    const logoutLink = screen.getByText('ODJAVA');

    fireEvent.click(logoutLink);

    expect(localStorageMock.removeItem).toHaveBeenCalledWith('loggedInUser');

  });
});
