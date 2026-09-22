import React, { useState } from "react";

const today = () => new Date().toISOString().split("T")[0];

const BookingForm = ({ availableTimes, dispatch, submitForm }) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};
    const guestCount = Number(guests);

    if (!date) {
      nextErrors.date = "Please choose a reservation date.";
    } else if (date < today()) {
      nextErrors.date = "Date cannot be in the past.";
    }

    if (!time) {
      nextErrors.time = "Please choose a reservation time.";
    }

    if (!guests) {
      nextErrors.guests = "Please enter the number of guests.";
    } else if (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 10) {
      nextErrors.guests = "Guests must be a whole number between 1 and 10.";
    }

    if (!occasion) {
      nextErrors.occasion = "Please select an occasion.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    submitForm({
      date,
      time,
      guests: Number(guests),
      occasion,
    });
  };

  const handleDateChange = (e) => {
    const nextDate = e.target.value;
    setDate(nextDate);
    setTime("");
    dispatch(nextDate);
    if (errors.date) {
      setErrors((prev) => ({ ...prev, date: undefined }));
    }
  };

  const timeOptions = availableTimes?.availableTimes ?? [];

  return (
    <form onSubmit={handleSubmit} noValidate aria-labelledby="booking-heading">
      <fieldset className="formField">
        <legend className="hidden">Reservation details</legend>
        <div>
          <label htmlFor="book-date">Choose Date:</label>
          <input
            id="book-date"
            name="date"
            type="date"
            value={date}
            min={today()}
            onChange={handleDateChange}
            aria-invalid={errors.date ? "true" : "false"}
            aria-describedby={errors.date ? "book-date-error" : undefined}
            required
          />
          {errors.date && (
            <p id="book-date-error" className="form-error" role="alert">
              {errors.date}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="book-time">Choose Time:</label>
          <select
            id="book-time"
            name="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
              if (errors.time) {
                setErrors((prev) => ({ ...prev, time: undefined }));
              }
            }}
            aria-invalid={errors.time ? "true" : "false"}
            aria-describedby={errors.time ? "book-time-error" : undefined}
            required
          >
            <option value="">Select a Time</option>
            {timeOptions.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          {timeOptions.length === 0 && date && (
            <p className="form-hint">No times available for this date. Try another day.</p>
          )}
          {errors.time && (
            <p id="book-time-error" className="form-error" role="alert">
              {errors.time}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="book-guests">Number of Guests:</label>
          <input
            id="book-guests"
            name="guests"
            type="number"
            min="1"
            max="10"
            value={guests}
            onChange={(e) => {
              setGuests(e.target.value);
              if (errors.guests) {
                setErrors((prev) => ({ ...prev, guests: undefined }));
              }
            }}
            aria-invalid={errors.guests ? "true" : "false"}
            aria-describedby={errors.guests ? "book-guests-error" : undefined}
            required
          />
          {errors.guests && (
            <p id="book-guests-error" className="form-error" role="alert">
              {errors.guests}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="book-occasion">Occasion:</label>
          <select
            id="book-occasion"
            name="occasion"
            value={occasion}
            onChange={(e) => {
              setOccasion(e.target.value);
              if (errors.occasion) {
                setErrors((prev) => ({ ...prev, occasion: undefined }));
              }
            }}
            aria-invalid={errors.occasion ? "true" : "false"}
            aria-describedby={errors.occasion ? "book-occasion-error" : undefined}
            required
          >
            <option value="">Select an Option</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          {errors.occasion && (
            <p id="book-occasion-error" className="form-error" role="alert">
              {errors.occasion}
            </p>
          )}
        </div>
        <div className="btnReceive">
          <input
            aria-label="Make your reservation"
            type="submit"
            value="Make Your Reservation"
          />
        </div>
      </fieldset>
    </form>
  );
};

export default BookingForm;
