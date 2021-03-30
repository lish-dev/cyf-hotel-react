import React from "react";

const CityData = [
  {
    name: "Glasgow",
    link: "https://peoplemakeglasgow.com/",
    img: "https://images.unsplash.com/photo-1533474034618-3118b91f2826?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    alt: "Image of Glasgow City",
  },

  {
    name: "Manchester",
    link: "https://www.visitmanchester.com/",
    img: "https://images.unsplash.com/photo-1515586838455-8f8f940d6853?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=984&q=80",
    alt: "Image of Manchester City",
  },

  {
    name: "London",
    link: "https://visitlondon.com/",
    img: "https://images.unsplash.com/photo-1506501139174-099022df5260?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80",
    alt: "Image of Glasgow City",
  },
];

const TouristInfoCards = () => {
  return (
    <section>
      {CityData.map((props, index) => {
        return (
          <div key={index} className="card">
            <img src={props.img}  alt={props.alt} className="card-img-top" />
            <div className="card-body">
              <h3>{props.name}</h3>
              <a href={props.link} className="btn btn-primary">
                Let's Go Here
              </a>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default TouristInfoCards;
