import React from 'react';

const Simpson = ({simpsons}) => {
    const {name, surname, age, gender, photo} = simpsons
    return (
        <div>
            <h1>{name} {surname}</h1>
            <ul>
                <li>{age} Років</li>
                <li>{gender} Стать</li>
            </ul>
            <img src={photo} alt=""/>
        </div>
    );
};

export default Simpson;