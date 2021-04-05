import React, { useState } from "react";
import Table from "./Table";

import CustomerProfile from "./CustomerProfile";

const SearchResults = (props) => {
  const [selectedCustomerInfo, setSelectedCustomer] = useState("");
  const customerDetails = (customerId) => {
    setSelectedCustomer(customerId);
  };
  return (
    <div>
      <Table bookings={props.bookings} customerDetails={customerDetails} />

      <CustomerProfile  id={selectedCustomerInfo}/>
      
    </div>
  );
};

export default SearchResults;
