import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test('can receive a new user and show it on a list', async () => {
    render(<App />);

    const nameInput = screen.getByRole('textbox', {
        name: /enter name/i
    });
    const emailEmail = screen.getByLabelText(/enter email/i);
    const button = screen.getByRole('button');

    await user.click(nameInput);
    await user.keyboard('Jane');

    await user.click(emailEmail);
    await user.keyboard('jane@test.com');

    await user.click(button);

    screen.debug();

    const name = screen.getByRole('cell', { name: 'Jane' });
    const email = screen.getByRole('cell', { name: 'jane@test.com' });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
});