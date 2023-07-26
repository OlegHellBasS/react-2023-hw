import React from 'react';

export const UserComponent = ({user,setUserId}) => {
    return (
        <div style={{ background: "silver", display: "flex", justifyContent: "center", margin: "10px", flexDirection: "column"}}>
            <p><b>Id:</b> {user.id}</p>
            <p><b>Name:</b> {user.name}</p>
            <div>
                <button onClick={() => setUserId(user.id)}>Show Posts</button>
            </div>
        </div>
    );
};
