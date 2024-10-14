import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

export default function EmployeeSchedule() {
  const [events, setEvents] = useState([
    {
      title: 'Meeting with Team A',
      start: new Date(2024, 8, 29, 10, 0), // September 29, 2024, 10:00 AM
      end: new Date(2024, 8, 29, 12, 0), // September 29, 2024, 12:00 PM
    },
    {
      title: 'Project Deadline',
      start: new Date(2024, 8, 30, 17, 0), // September 30, 2024, 5:00 PM
      end: new Date(2024, 8, 30, 18, 0), // September 30, 2024, 6:00 PM
    },
    // Add more events as needed
  ]);

  return (
    <div className='bg-white p-2' style={{ height: '100vh' }}>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        defaultView="month" // You can set this to 'week' or 'day' as needed
        views={['month', 'week', 'day']}
        style={{ height: 500 }}
      />
    </div>
  );
}
