import React from 'react';
import volunteerData from './fakeData.json'

const SendData = () => {
    const sendData = () => {
        fetch('http://localhost:5000/addEvent',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(volunteerData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    return (
        <div>
            
        </div>
    );
};

export default SendData;