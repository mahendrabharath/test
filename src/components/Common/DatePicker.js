import React from "react";
// import { Calendar } from 'primereact/calendar';

const DatePicker =() =>{
    return(
        <div>
            <Calendar value={date} onChange={(e) => setDate(e.value)}></Calendar>
        </div>
    )
};

export default DatePicker;