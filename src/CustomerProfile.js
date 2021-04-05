import React, { useState, useEffect } from "react";

function CustomerProfile(props) {
  const [CustomerInfo, setCustomerInfo] = useState("");
  useEffect(() => {
    fetch(`https://cyf-react.glitch.me/customers/${props.id}`)
      .then((res) => res.json())
      .then((data) => {
        setCustomerInfo(data);
      });
  }, [props.id]);

  return props.id !== "" ? (
    <div>
      Customer-{props.id}-Profile
      <ul>
        <li>
          Customer-Name: {CustomerInfo.title}{" "}
          {CustomerInfo.firstName}-{CustomerInfo.surname}
        </li>
        <li>Customer-ID: {CustomerInfo.id}</li>
        <li>Customer-Email: {CustomerInfo.email}</li>
        <li>Customer-phoneNumber:{CustomerInfo.phoneNumber} </li>
        <li>VIP: {CustomerInfo.vip === true ? "YES" : "NO"}</li>
      </ul>
    </div>
  ) : (
    <div />
  );
}

export default CustomerProfile;
