import React from 'react';
import Dashboard from './Dashboard'

function Display(props){
    return (
        <>
        <h1>Dispaly Section</h1>
        <div>Strikes: {props.strikes}</div>
        <div>Balls: {props.balls}</div>

        
        </>
    );
};

export default Display;