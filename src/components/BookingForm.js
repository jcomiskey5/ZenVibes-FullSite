import React from "react";
import './BookingForm.css';
import {db} from './firebase'
import { useState } from 'react';

export default function BookingForm() {

    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        db.collection('appointments').add({
            name: name,
            date: date,
            time: time,
        })
        .then(() => {
            alert("Your appointment has been made.")
        })
        .catch(error => {
            alert(error.message);
        })

        setName('')
        setDate('')
        setTime('')
    }

 return (
<div className='book-appt'>
    <form className='book-form' onSubmit={handleSubmit}>
        <h1 className='book-form-title'>Book Appointment</h1>
        <label className='book-label'>Name</label>
        <input className='book-input'
        name="name"
        required
        value = {name}
        onChange={(e) => setName(e.target.value)}
        />
        <label className='book-label'>Date</label>
        <input
            className='book-input'
            name="date"
            type="date"
            required
            value = {date}
            onChange={(e) => setDate(e.target.value)}
        />
        <label className='book-label'>Time</label>
        <select className='book-time'
        name="time-slot"
        value = {time}
        onChange={(e) => setTime(e.target.value)} required>
            <option value="" disabled selected>Select Time</option>
            <option value ="10:00">10:00 am</option>
            <option value ="11:00">11:00 am</option>
            <option value ="12:00">12:00 pm</option>
            <option value ="13:00">1:00 pm</option>
            <option value ="14:00">2:00 pm</option>
            <option value ="15:00">3:00 pm</option>
            <option value ="16:00">4:00 pm</option>
            <option value ="17:00">5:00 pm</option>
            <option value ="18:00">6:00 pm</option>
        </select>

        <input className ='book-submit' type="submit" value="Book Now" />
    </form>
</div>
 );
}


