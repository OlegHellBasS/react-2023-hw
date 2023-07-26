import React from 'react';

export const UserAddress = ({user}) => {
    return (
        <div>
            <h3>Address</h3>
            <ul>
                <li><b>City:</b> {user.address.city}</li>
                <li><b>Street:</b> {user.address.street}</li>
                <li><b>Suite:</b> {user.address.suite}</li>
            </ul>
        </div>
    );
};
