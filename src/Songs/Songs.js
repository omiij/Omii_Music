import React from "react";
import "../Songs/Songs.css";

export default function Song(props) {
  console.log(props.Name);
  return (
    <>
      <div className="card">
        {props.Name.map((item) => {
          return (
            <figure>
              <a href={item.songLink}>
                {" "}
                <img src={item.songImg} alt="Trulli" className="song_Image" />
              </a>
              <figcaption>{item.songName}</figcaption>
            </figure>
          );
        })}
      </div>
    </>
  );
}
