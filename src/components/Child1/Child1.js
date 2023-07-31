import React from 'react';
import {SubChild11} from "./SubChild1_1/SubChild1_1";
import {SubChild12} from "./SubChild1_2/SubChild1_2";

export const Child1 = () => {
    return (
        <div>
            Child1
            <SubChild11/>
            <hr/>
            <SubChild12/>
        </div>
    );
};
