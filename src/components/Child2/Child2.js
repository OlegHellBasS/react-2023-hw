import React, {useContext} from 'react';
import {SubChild21} from "./SubChild2_1/SubChild2_1";
import {SubChild22} from "./SubChild2_2/SubChild2_2";
import {SimpsonContext} from "../../App";

export const Child2 = () => {
    const simpsonsFamily = [
        {
            id:1,
            name: 'Гомер',
            surname: 'Сімпсон',
            age: 39,
            gender: 'чоловіча',
            photo: 'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'
        },
        {
            id: 2,
            name: 'Мардж',
            surname: 'Сімпсон',
            age: 36,
            gender: 'жіноча',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        },
        {
            id: 3,
            name: 'Барт',
            surname: 'Сімпсон',
            age: 10,
            gender: 'чоловіча',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/thumb/2/29/Bart_Simpson.gif/270px-Bart_Simpson.gif'
        },
        {
            id: 4,
            name: 'Ліса',
            surname: 'Сімпсон',
            age: 8,
            gender: 'жіноча',
            photo: 'https://upload.wikimedia.org/wikipedia/uk/thumb/a/ae/Lisasmiling.png/255px-Lisasmiling.png'
        },
        {
            id: 5,
            name: 'Мегґі Сімпсон',
            surname: 'Сімпсон',
            age: 1,
            gender: 'жіноча',
            photo: 'https://upload.wikimedia.org/wikipedia/uk/9/9d/Maggie_Simpson.png'
        }
    ];

    return (
        <div>
            Child2
            <SubChild21/>
            <hr/>
            {simpsonsFamily.map((simpson) => <SubChild22 key={simpson.id} simpson={simpson}/>)}
        </div>
    );
};

