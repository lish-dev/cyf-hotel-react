import React, {useState} from "react";
import moment from "moment";
import CustomerProfile from "./Customer Profile";

const SearchResults = (props) => {
  const colourChange = (e) => {
    if (e.target.parentElement.classList.contains("colourEffect")) {
      e.target.parentElement.classList.remove("colourEffect");
    } else {
      e.target.parentElement.classList.add("colourEffect");
    }

  };

    const [selectedCustomerInfo, setSelectedCustomer] = useState("");
  //   const  selectCustomerInfo = selectCustomerInfo => {
  //     setSelectedCustomer(selectCustomerId);
  //   };

  

  return (
    <table className="table table-light">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Title</th>
          <th scope="col">First Name</th>
          <th scope="col">Surname</th>
          <th scope="col">Email</th>
          <th scope="col">Room Id</th>
          <th scope="col">Check in Date</th>
          <th scope="col">Check out Date</th>
          <th scope="col">No of Nights</th>
          <th scope="col">
          </th>
        </tr>
      </thead>
      <tbody>
        {props.bookings.map((result, index) => (
          <tr key={index} onClick={colourChange} className={null}>
            <td>{result.id}</td>
            <td>{result.title}</td>
            <td>{result.firstName}</td>
            <td>{result.surname}</td>
            <td>{result.email}</td>
            <td>{result.roomId}</td>
            <td>{result.checkInDate}</td>
            <td>{result.checkOutDate}</td>
            <td>
              {moment(result.checkOutDate).diff(result.checkInDate, "days")}
            </td>
            <td><button className="Customer Profile">Show Profile</button></td>
            
          </tr>
        ))}
      </tbody>
       {/* <CustomerProfile  />   */}
    </table>
  
  );
};

export default SearchResults;
