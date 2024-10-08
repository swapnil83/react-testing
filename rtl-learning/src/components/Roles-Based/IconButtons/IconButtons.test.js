import { render, screen } from '@testing-library/react';
import IconButtons from './IconButtons';

test('access icon buttons', () => {
    render(<IconButtons />);

    const signInButton = screen.getByRole('button', {
        name: /sign in/i
    });

    const signOutButton = screen.getByRole('button', {
        name: /sign out/i
    });

    expect(signInButton).toBeInTheDocument();
    expect(signOutButton).toBeInTheDocument();
});