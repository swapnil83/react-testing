import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import UserForm from './UserForm';

test('it shows two inputs and a button', () => {
    render(<UserForm />);

    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', async () => {
    // const argList = [];
    // const callback = (...args) => {
    //     argList.push(args);
    // }

    const mock = jest.fn();

    render(<UserForm onUserAdd={mock} />);

    // const [nameInput, emailInput] = screen.getAllByRole('textbox');
    const nameInput = screen.getByRole('textbox', {
        name: /enter name/i
    });

    user.click(nameInput);
    user.keyboard('Jane');

    const emailInput = screen.getByLabelText(/enter email/i);

    user.click(emailInput);
    user.keyboard('jane@test.com');

    const button = screen.getByRole('button');
    user.click(button);

    // await waitFor(() => {
    //     expect(argList).toHaveLength(1);
    //     expect(argList[0][0]).toEqual({ name: 'Jane', email: 'jane@test.com' });
    // });
    expect(mock).toHaveBeenCalled();
    expect(mock).toHaveBeenCalledWith({ name: 'Jane', email: 'jane@test.com' });

});