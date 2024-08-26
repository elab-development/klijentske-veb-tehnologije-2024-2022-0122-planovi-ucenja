import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Predmet from './components/PredmetK';
import { PolozeniPredmet as PredmetType } from './models/PolozeniPredmet';

describe('Predmet Component', () => {
  const mockPredmet: PredmetType = {
    ime: 'Matematika',
    brojESBP: 6,
    polozen: false,
  };

  it('should render the Predmet component with the correct name and ESBP points', () => {
    render(<Predmet ime={mockPredmet.ime} brojESBP={mockPredmet.brojESBP} polozen={mockPredmet.polozen} />);

    expect(screen.getByText('Matematika')).toBeInTheDocument();
    expect(screen.getByText('6 ESBP')).toBeInTheDocument();
  });

  it('should have the correct classes applied to the elements', () => {
    render(<Predmet ime={mockPredmet.ime} brojESBP={mockPredmet.brojESBP} polozen={mockPredmet.polozen} />);

    const imeElement = screen.getByText('Matematika');
    expect(imeElement).toHaveClass('predmet');

    const esbpElement = screen.getByText('6 ESBP');
    expect(esbpElement).toHaveClass('predmet predmet-esbp');
  });
});