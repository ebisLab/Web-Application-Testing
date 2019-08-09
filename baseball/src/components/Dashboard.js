import React from 'react';

function Dashboard(props){
    return (
        <div>
            <h1>Dashboard Section</h1>
            <button onClick={props.strike}>Strike</button>
            <button onClick={props.ball}>Ball</button>
            <button onClick={props.foul}>Foul</button>
            <button onClick={props.hit}>Hit</button>
            
            </div>
    );
};

export default Dashboard;