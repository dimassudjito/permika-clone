import React, { useState } from 'react';
import eventData from '../data/eventData'
import Event from './Event'

const Executives = () => {
  const [events, setEvents] = useState(eventData)

  return (
    <div>
      <h1 className="m-5">Upcoming Events</h1>
      <Event events={events}/>
    </div>
  );
};

export default Executives;
