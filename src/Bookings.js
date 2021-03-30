import React, { useState } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";

const Bookings = () => {
  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };
  const [bookings, /*setBookings*/] = useState(0);

  return (
    <div className="App-content">
      <div className="container">
        {<Search search={search} />}
        {<SearchResults bookings={bookings} />}
      </div>
    </div>
  );
};

export default Bookings;
