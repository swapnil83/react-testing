import React from 'react'

const UserList = (props) => {
    const renderedUsers = props.users.map(user => {
        return (
            <tr key={user.name}>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr>
        )
    });

    return <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            {renderedUsers}
        </tbody>
    </table>
}

export default UserList