import React from 'react';

import {UserDetails} from "../UserDetails/UserDetails";
import {UserAddress} from "../UserAddress/UserAddress";
import {Company} from "../Company/Company";

export const User = ({user}) => {
    return (
        <div style={{background: "silver"}}>
            <UserDetails user={user}/>
            <UserAddress user={user}/>
            <Company user={user}/>
        </div>
    );
};
