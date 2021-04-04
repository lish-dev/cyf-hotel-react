import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = (props) => {
  return (
    <table className="table table-light">
      <TableHead />
      <tbody>
      {props.bookings.map((result, index) => (
        <TableBody key={index} result={result} customerDetails={props.customerDetails}/>
      ))}
      </tbody>
    </table>
  );
};

export default Table;
