import React, {useEffect, useState} from 'react';

import Launche from "./Launche";

export const Launches = () => {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then((res) => res.json())
            .then((launches) => setLaunches(launches))
            .catch()
    }, [])
    console.log(launches);

const launcheYearFilter = launches.filter(value => value.launch_year !== '2020');

    return (
        <div>
            {launcheYearFilter.map((value) => <Launche key={value.flight_number} value={value}/>)}
        </div>
    );
};