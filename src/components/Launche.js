import React from 'react';

import './Launche.css'

const Launche = ({value}) => {

    return (
        <div className="Launche">
            <div><p><b>Flight Number:</b> {value.flight_number}</p></div>
            <div><p><b>Mission Name:</b> {value.mission_name}</p></div>
            <div><p><b>Launch Year:</b> {value.launch_year}</p></div>
        </div>
    );
};

export default Launche;