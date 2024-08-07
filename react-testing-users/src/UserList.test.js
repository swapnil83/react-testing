import { render, screen } from '@testing-library/react';
import UserList from './UserList';

test('render one row per user', () => {
    const users = [
        { name: 'Jane', email: 'jane@test.com' },
        { name: 'Peter', email: 'peter@test.com' },
    ];

    render(<UserList users={users} />);

    
});

test('render the email and name of each user', () => {

});