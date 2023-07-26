import React, {useState} from 'react';

import {UsersComponent} from "./UsersComponent/UsersComponent";
import {Posts} from "./Posts/Posts";

const App = () => {
    const [userId, setUserId] = useState(null);
    return (
        <div>
          <UsersComponent setUserId={setUserId}/>
            {!! userId && <Posts userId={userId}/>}
        </div>
    );
};

export default App;