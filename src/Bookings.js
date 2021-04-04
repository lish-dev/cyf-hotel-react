import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const search = (e) => {
    var firstName = bookings.filter((item) => {
      return item.firstName.toLowerCase().includes(e.toLowerCase());
    });
    setResult(firstName);
  };
  const [bookings, setBookings] = useState([]);
  const [error, setError] = useState(false);
  const [result, setResult] = useState([]);

  useEffect(() => {
    fetch("https://cyf-react.glitch.me")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBookings(data);
        setResult(data);
      })
      .catch((error) => {
        setError(true);
      });
  }, []);

  if (bookings && result && error === false) {
    return (
      <div className="App-content">
        <div className="container">
          {<Search search={search} />}
          {<SearchResults bookings={result} />}
        </div>
      </div>
    );
  }
};

export default Bookings;
