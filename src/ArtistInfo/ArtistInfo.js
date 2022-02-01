import React from "react";
import "../ArtistInfo/Artist_Info.css";

export default function Pitbull(props) {
  console.log(props.INFO);
  return (
    <>
      <div className="Main">
        <div className="Artist-info">
          {props.INFO.map((item, index) => {
            return (
              <>
                <div className="Image" key={index}>
                  <img src={item.image} alt={item.alt} className="thisimg" />
                </div>
                <div className="content">
                  <h3>{item.name}</h3>
                  <p>{item.info}</p>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
