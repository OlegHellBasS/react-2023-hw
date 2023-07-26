import React from 'react';

export const UserDetails = ({user}) => {
    return (
        <div>
            <h3>UserDetails</h3>
            <ul>
            <li><b>ID:</b> {user.id}</li>
            <li><b>Name:</b> {user.name}</li>
            <li><b>Username:</b> {user.username}</li>
            <li><b>Email:</b> {user.email}</li>
            <li><b>Phone:</b> {user.phone}</li>
            <li><b>Website:</b> {user.website}</li>
            </ul>
        </div>
    );
};
