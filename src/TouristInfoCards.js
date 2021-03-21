import React from "react";

const TouristInfoCards = props => {
  return (
    <div className="card">
      <img src={props.img} className="card-img-top" alt={props.city} />
      <div className="card-body">
        <a
          href={props.link}
          target="_blank"
          className="btn btn-primary"
          rel="noopener noreferrer"
        >
          Click for more about {props.city}
        </a>
      </div>
    </div>
  );
};
      
    
    
    export default TouristInfoCards;
