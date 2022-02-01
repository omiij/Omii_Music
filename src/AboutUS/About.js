import React from "react";
import "../AboutUS/About.css";
import { AboutData } from "../Data/All_Data";

export default function About() {
  return (
    <>
      <main className="wrapper">
        <section className="work-content">
          {AboutData.map((item, index) => {
            return (
              <article key={index}>
                <>
                  <figure>
                    <img src={item.image} alt={item.alt} />
                    <figcaption>
                      <h3>{item.heading}</h3>
                    </figcaption>
                  </figure>
                  <p>{item.information}</p>
                </>
              </article>
            );
          })}
        </section>
      </main>
    </>
  );
}
