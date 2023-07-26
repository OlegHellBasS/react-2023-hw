import React, {useEffect, useState} from 'react';
import {Users} from "./components/Users/Users";

const App = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => setUsers(users))
            .catch((error) => {
                console.log(error);
            });
    }, [])
    console.log(users);

    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

export default App;