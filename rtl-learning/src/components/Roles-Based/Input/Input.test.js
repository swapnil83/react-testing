import { screen, render } from '@testing-library/react';
import Input from './Input';

test('can find elements by role', () => {
    render(<Input />);

    const roles = [
        'link',
        'button',
        'contentinfo',
        'heading',
        'banner',
        'img',
        'checkbox',
        'spinbutton',
        'radio',
        'textbox',
        'listitem',
        'list'
    ];

    for(let role of roles) {
        const el = screen.getByRole(role);

        expect(el).toBeInTheDocument();
    }
});