import React, {useContext} from 'react';
import {SimpsonContext} from "../../../App";


export const SubChild11 = () => {
    const {simpson, setSimpson} = useContext(SimpsonContext);
    console.log(simpson)
    return (
        <div>
            SubChild1_1
            <h1>{simpson.name} {simpson.surname}</h1>
            <ul>
                <li>{simpson.age} Років</li>
                <li>{simpson.gender} Стать</li>
            </ul>
            <img src={simpson.photo} alt=""/>
        </div>
    );
};

