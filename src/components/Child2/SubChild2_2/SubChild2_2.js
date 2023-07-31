import React, {useContext} from 'react';
import {SimpsonContext} from "../../../App";


export const SubChild22 = ({ simpson:simpson_ }) => {
    const {name, surname, age, gender, photo} = simpson_
    const {simpson, setSimpson} = useContext(SimpsonContext);
    return (
        <div>
            SubChild2_2
            <h1>{name} {surname}</h1>
            <ul>
                <li>{age} Років</li>
                <li>{gender} Стать</li>
            </ul>
            <img src={photo} alt=""/>
            <button onClick={() => setSimpson(simpson_)}>Click</button>
        </div>
    );
};

