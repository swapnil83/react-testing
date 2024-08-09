import { render, screen } from '@testing-library/react';
import MoreNames from './MoreNames.test';

test('shows an email and password input', () => {
    render(<MoreNames />);

    const emailInput = screen.getByRole('textbox', {
        name: /email/i
    });

    const passwordInput = screen.getByRole('textbox', {
        name: /password/i
    });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
});