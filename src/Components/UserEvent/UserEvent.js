import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import ShowUserEvent from './ShowUserEvent';

const UserEvent = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { email } = loggedInUser;
    const [userEvent, setUserEvent] = useState([]);
    console.log(userEvent);
    useEffect(() => {
        fetch(`http://localhost:5000/userEventWithEmail/${email}`)
            .then(res => res.json())
            .then(data => {
                setUserEvent(data);
            })
    }, [])


    const handleCancel = (id) => {
        if (window.confirm('Are you sure you want to cancel????')) {
            fetch(`http://localhost:5000/deleteUserEvent/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data) {
                   const newEventData = userEvent.filter(ed => ed.eventId!==id)
                   setUserEvent(newEventData)
                }
            })
        }
            
        }

    return (
        <div>
            <Header></Header>
            <div className="container">
                <div className="d-flex flex-wrap m-8 p-5">
                    {
                        userEvent.map(data => <ShowUserEvent handleCancel={handleCancel} data={data}></ShowUserEvent>)
                    }
                </div>
            </div>
        </div>
    );
};

export default UserEvent;