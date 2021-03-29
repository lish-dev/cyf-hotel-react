import React from "react";
import TouristInfoCards from "./TouristInfoCards";
import Bookings from "./Bookings";
import Restaurant from "./Restaurant";
import Heading from "./Heading";
import Footer from "./Footer";
import "./App.css";

const address = [
  "123 Fake Street, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789",
];

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <Heading />
      <TouristInfoCards />
      <Bookings />
      <Restaurant />
      <Footer address={address} />
    </div>
  );
};

export default App;
