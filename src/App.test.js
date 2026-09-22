import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import BookingForm from "./components/BookingForm";

const renderWithRouter = (ui) =>
  render(<BrowserRouter>{ui}</BrowserRouter>);

test("Renders the Header heading", () => {
  renderWithRouter(<App />);
  expect(screen.getByText("Reserve Table")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("button", { name: /reserve table/i }));

  expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
});

test("Initialize/Update Times", () => {
  const dispatch = jest.fn();
  const initialState = { availableTimes: ["17:00", "18:00"] };

  render(
    <BookingForm
      availableTimes={initialState}
      dispatch={dispatch}
      submitForm={jest.fn()}
    />
  );

  fireEvent.change(screen.getByLabelText(/choose date/i), {
    target: { value: "2026-09-25" },
  });

  expect(dispatch).toHaveBeenCalledWith("2026-09-25");
});

test("Booking form validates guest count", async () => {
  const submitForm = jest.fn();
  render(
    <BookingForm
      availableTimes={{ availableTimes: ["17:00"] }}
      dispatch={jest.fn()}
      submitForm={submitForm}
    />
  );

  await userEvent.type(screen.getByLabelText(/number of guests/i), "0");
  fireEvent.click(screen.getByRole("button", { name: /make your reservation/i }));

  expect(
    screen.getByText(/guests must be a whole number between 1 and 10/i)
  ).toBeInTheDocument();
  expect(submitForm).not.toHaveBeenCalled();
});
