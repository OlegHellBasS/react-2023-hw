import React from 'react';
import './Simpsons.css'
import Simpson from "./Simpson";


const Simpsons = () => {
    const simpsonsFamily = [
        {
            name: 'Гомер',
            surname: 'Сімпсон',
            age: 39,
            gender: 'чоловіча',
            photo: 'https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png'
        },
        {
            name: 'Мардж',
            surname: 'Сімпсон',
            age: 36,
            gender: 'жіноча',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
        },
        {
            name: 'Барт',
            surname: 'Сімпсон',
            age: 10,
            gender: 'чоловіча',
            photo: 'https://upload.wikimedia.org/wikipedia/ru/thumb/2/29/Bart_Simpson.gif/270px-Bart_Simpson.gif'
        },
        {
            name: 'Ліса',
            surname: 'Сімпсон',
            age: 8,
            gender: 'жіноча',
            photo: 'https://upload.wikimedia.org/wikipedia/uk/thumb/a/ae/Lisasmiling.png/255px-Lisasmiling.png'
        },
        {
            name: 'Мегґі Сімпсон',
            surname: 'Сімпсон',
            age: 1,
            gender: 'жіноча',
            photo: 'https://upload.wikimedia.org/wikipedia/uk/9/9d/Maggie_Simpson.png'
        }
    ];
    return (
        <div className='Simpson'>
            <Simpson simpsons={simpsonsFamily[0]}/>
            <Simpson simpsons={simpsonsFamily[1]}/>
            <Simpson simpsons={simpsonsFamily[2]}/>
            <Simpson simpsons={simpsonsFamily[3]}/>
            <Simpson simpsons={simpsonsFamily[4]}/>
        </div>
    );
};

export default Simpsons;