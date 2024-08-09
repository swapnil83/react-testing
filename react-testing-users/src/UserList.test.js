import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

function renderComponent() {
    const users = [
        { name: 'Jane', email: 'jane@test.com' },
        { name: 'Peter', email: 'peter@test.com' },
    ];

    render(<UserList users={users} />);

    return {
        users
    };
}

// Not going to use, prupose of "beforeEach" function is it will get called before each test case
// beforeEach(() => {
//     render(<UserList users={users} />);
// });

test('render one row per user', () => {
    renderComponent();
    
    // part of Solution 2
    // const { container } = render(<UserList users={users} />);

    // Incorrect solution but gives idea about playground where you can get nodes selection idea
    // screen.logTestingPlaygroundURL();
    // const rows = screen.getAllByRole('row');  // instead of 2 it results 3 which is incorrect

    // Solution 1
    const rows = within(screen.getByTestId('users')).getAllByRole('row');

    // Solution 2
    // const rows = container.querySelectorAll('tbody tr');

    expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
    const { users } = renderComponent();

    // screen.logTestingPlaygroundURL();

    for(let user of users) {
        const name = screen.getByRole('cell', { name: user.name });
        const email = screen.getByRole('cell', { name: user.email });

        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }
});