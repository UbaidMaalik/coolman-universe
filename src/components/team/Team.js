import React, { Fragment } from "react";
import "./team.css";

const Team = () => {
  const data = [
    {
      image: "team1.png",
      name: "Danny Casale",
      para: "Artist",
      link: "https://google.com",
    },
    {
      image: "team2.png",
      name: "Daveemouse",
      para: "Strategy",
      link: "https://google.com",
    },
    {
      image: "team3.png",
      name: "Pot",
      para: "Product",
      link: "https://google.com",
    },
    {
      image: "team4.png",
      name: "Jeff",
      para: "Engineering",
      link: "https://google.com",
    },
    {
      image: "team5.png",
      name: "Purpledragon",
      para: "Engineering",
      link: "https://google.com",
    },
    {
      image: "team6.png",
      name: "Croissanti",
      para: "Engineering",
      link: "https://google.com",
    },
    {
      image: "team7.png",
      name: "Finno",
      para: "Marketing",
      link: "https://google.com",
    },
    {
      image: "team8.png",
      name: "Yuppie",
      para: "Advisor",
      link: "https://google.com",
    },
    {
      image: "team9.png",
      name: "Dinfo",
      para: "Advisor",
      link: "https://google.com",
    },
    {
      image: "team10.png",
      name: "Jo",
      para: "Design",
      link: "https://google.com",
    },
    {
      image: "team11.png",
      name: "Ethan",
      para: "Design",
      link: "https://google.com",
    },
  ];
  return (
    <Fragment>
      <div className="team" id="team">
        <div className="container">
          <h2>TEAM</h2>

          <div className="row justify-content-center">
            {data.map((item) => (
              <div className="col-sm-2 col-4">
                <div className="team">
                  <img
                    className="img-fluid"
                    src={`/images/${item.image}`}
                    alt=""
                  />
                  <h3>
                    <a href={item.link} className="text-decoration-none">
                      {item.name}
                    </a>
                  </h3>
                  <p>{item.para}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Team;
