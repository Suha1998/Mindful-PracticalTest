import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import axios from 'axios';
import Events from './Events';

function ViewEvents() {
    const [events, setEvents] = useState([])
    useEffect(() => {
     axios.get('http://localhost:4000/event')
     .then(res => setEvents(res.data))
     .catch(error => console.log(error));
   });

    return (
        <div className = "App">
            <Route to = "/events" render = {() => <Events events={events}/>}/>
        </div>
    )
}

export default ViewEvents;