import { screen, render, within } from '@testing-library/react';
import FormMatcher from './FormMatcher';

function toContainRole(container, role, quantity = 1) {
    const elements = within(container).queryAllByRole(role);

    if(elements.length === quantity) {
        return {
            pass: true
        }
    }

    return {
        pass: false,
        message: () => `Excepted ${role} role of ${quantity} quantity is not found.
        Instead ${elements.length} ${role} found.`
    }
}

expect.extend({ toContainRole });

test('the form displays two buttons', () => {
    render(<FormMatcher />);

    const form = screen.getByRole('form');

    // const buttons = within(form).getAllByRole('button');
    // expect(buttons).toHaveLength(2);

    // Custom Matcher
    expect(form).toContainRole('button', 2);
});