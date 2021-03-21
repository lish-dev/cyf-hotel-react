import React from "react";
import Bookings from "./Bookings";
import TouristInfoCards from "./TouristInfoCards";
import Heading from "./Heading";
import Footer from "./Footer";
import CityData from "./CityData";
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
      <TouristInfoCards/>
      <Footer address={address}/>
      <Bookings/>
      {/* <CityData /> */}
    </div>
  );
};

export default App;
