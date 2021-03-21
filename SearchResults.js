import React from "react";
import moment from "moment";
import FakeBookings from "./data/fakeBookings.json";

const SearchResults = () => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Surname</th>
            <th scope="col">Email</th>
            <th scope="col">Room Id</th>
            <th scope="col">Surname</th>
            <th scope="col">Check in Date</th>
            <th scope="col">Check out Date</th>
            <th scope="col">No of Nights</th>
          </tr>
        </thead>
        <tbody>
          {FakeBookings.map((result) => (
            <tr>
              <td>{result.id}</td>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              {moment(result.checkOutDate).diff(result.checkInDate, "days")}
            </tr>
          ))}
          ;
        </tbody>
      </table>
    </div>
  );
};

export default SearchResults;
