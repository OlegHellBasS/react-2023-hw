import React, {useEffect, useState} from 'react';

import {UserComponent} from "../UserComponent/UserComponent";
export const UsersComponent = ({setUserId}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setUsers(users))
            .catch((error) => {
                console.log(error);
            })
    },[]);

    console.log(users)

    return (
        <div>
            {users.map((user) => <UserComponent key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    );
};
