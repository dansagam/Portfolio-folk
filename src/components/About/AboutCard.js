import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kayode Ogunnowo</span>
            from <span className="purple">Lagos, Nigeria.</span>
            <br />I have got about{" "}
            <span className="purple">{new Date().getFullYear() - new Date(2019, 1, 20).getFullYear()}</span> years
            experience I am currently employed as a software developer at Juspay.
            <br />
            I actually love writting code and reviewing new technologies.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games like Snooker, Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Discuss about movies: A movie Critics
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>"There are no bad engineer, but need different managing styles!" </p>
          <footer className="blockquote-footer">Kayode</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
