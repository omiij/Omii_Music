import React, { useState } from "react";
import "./Artist.css";
import Info from "../Data/All_Data";

export default function Artis() {
  const [search, setSearch] = useState("");

  const HandleChange = (e) => {
    e.preventDefault();
    setSearch(() => e.target.value);
  };

  const filteredData = Info.filter((arr) =>
    arr.name.toLowerCase().includes(search.toLocaleLowerCase())
  );
  return (
    <>
      <div className="artist-main-container">
        <label className="artist-label">Artists</label>
        <input
          type="text"
          className="artist-input"
          onChange={HandleChange}
          placeholder="Artists"
        />
        <ul className="artist-Info-menu">
          {filteredData.map((item, index) => {
            return (
              <>
                <div key={index} className={item.cName}>
                  <a href={item.url}>
                    <img
                      className="artist"
                      src={item.Imageurl}
                      alt="Artists"
                      width="250px"
                      height="250px"
                    />
                  </a>
                  <h2>{item.name}</h2>
                </div>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
