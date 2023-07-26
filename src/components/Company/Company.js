import React from 'react';

export const Company = ({user}) => {
    return (
        <div>
            <h3>Company</h3>
            <ul>
                <li><b>Name:</b> {user.company.name}</li>
                <li><b>CatchPhrase:</b> {user.company.catchPhrase}</li>
                <li><b>Bs:</b> {user.company.bs}</li>
            </ul>
        </div>
    );
};

