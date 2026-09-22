import React from "react";
import BookingForm from "./BookingForm";

const Booking = (props) => {
  return (
    <section className="booking-page" aria-labelledby="booking-heading">
      <h1 id="booking-heading">Online Reservation</h1>
      <BookingForm
        availableTimes={props.availableTimes}
        dispatch={props.dispatch}
        submitForm={props.submitForm}
      />
    </section>
  );
};

export default Booking;
