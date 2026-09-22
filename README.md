# Little Lemon — Table Booking (Meta Front-End Capstone)

React web app for the Little Lemon restaurant: home page, weekly specials, and an online table reservation flow with form validation and confirmation screen.

## Features

- Responsive layout (mobile navigation menu, flexible menu cards)
- React Router routes: `/`, `/booking`, `/confirmed`
- Booking form with date, time, guests (1–10), and occasion fields
- Available times update when the date changes (`useReducer` + mock API)
- Accessible labels, `aria-*` attributes, and error messages for invalid input
- Unit tests with React Testing Library

## Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

## Setup

```bash
git clone <your-repo-url>
cd the-Little-Lemon-website
npm install
```

## Run locally

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000). Use **Reserve Table** or **Order Online** in the nav to open the booking form.

## Tests

```bash
npm test
```

Run once in CI mode:

```bash
CI=true npm test
```

## Project structure

```
src/
  components/   # Nav, Header, Menu, Booking, BookingForm, Footer, etc.
  images/       # Logo and menu photos
  App.js        # Page shell
  components/Main.js  # Routes and booking state
```

## License

Educational project for the Meta Front-End Developer Professional Certificate.
