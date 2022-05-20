import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Well-qualified Full Stack Developer",
          "Open Source Contributor",
          "Collaborative team player",
          "Knowledgeable of backend and frontend development",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
