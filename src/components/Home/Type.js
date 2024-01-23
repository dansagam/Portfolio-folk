import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Frontend Developer",
          "ReactJs Developer",
          "AngularJs Developer",
          "React Native Developer",
          "NextJs Developer",
          "Django Developer**",
          "NestJs Developer",
          "NodeJS Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
