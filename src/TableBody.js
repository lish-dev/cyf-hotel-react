import React from "react";
import moment from "moment";

const TableBody = (props) => {
    const colourChange = (e) => {
        if (e.target.parentElement.classList.contains("colourEffect")) {
          e.target.parentElement.classList.remove("colourEffect");
        } else {
          e.target.parentElement.classList.add("colourEffect");
        }
      };

      const handleCustomerDetails = () => {
         props.customerDetails(props.result.id)
      };
    
  return (
    
      <tr  onClick={colourChange} className={null}>
        <td>{props.result.id}</td>
        <td>{props.result.title}</td>
        <td>{props.result.firstName}</td>
        <td>{props.result.surname}</td>
        <td>{props.result.email}</td>
        <td>{props.result.roomId}</td>
        <td>{props.result.checkInDate}</td>
        <td>{props.result.checkOutDate}</td>
        <td>{moment(props.result.checkOutDate).diff(props.result.checkInDate, "days")}</td>
        <td>
          <button onClick={handleCustomerDetails} className="Customer Profile">
            Show Profile
          </button>
        </td>
      </tr>
    
  );
};

export default TableBody;
