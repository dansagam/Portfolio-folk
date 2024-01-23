import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit } from "react-icons/di";
import { FaAws, FaDocker } from "react-icons/fa";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiPostgresql,
  SiAntdesign,
  SiAngularjs,
  SiNestjs,
  SiTailwindcss,
  SiTypescript,
  SiExpress,
  SiD3Dotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {stackMock().map(({ icon: Icon, color }, idc) => (
        <Col xs={4} md={2} key={`${idc}`} className="tech-icons">
          <Icon fill={color} />
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;

const stackMock = () => [
  {
    icon: DiReact,
    color: "purple",
  },
  {
    icon: SiAngularjs,
    color: "red",
  },
  {
    icon: SiNestjs,
    color: "red",
  },
  {
    icon: FaDocker,
    color: "blue",
  },
  {
    icon: SiExpress,
    color: "red",
  },
  {
    icon: FaAws,
    color: "red",
  },
  {
    icon: SiTypescript,
    color: "lightblue",
  },
  {
    icon: DiJavascript1,
    color: "yellow",
  },

  {
    icon: DiNodejs,
    color: "red",
  },
  {
    icon: DiGit,
    color: "red",
  },
  {
    icon: DiMongodb,
    color: "green",
  },
  {
    icon: SiFirebase,
    color: "red",
  },
  {
    icon: SiRedis,
    color: "red",
  },
  {
    icon: DiPython,
    color: "yellow",
  },
  {
    icon: SiAntdesign,
    color: "purple",
  },
  {
    icon: SiTailwindcss,
    color: "red",
  },
  {
    icon: SiNextdotjs,
    color: "red",
  },
  {
    icon: SiPostgresql,
    color: "red",
  },
  {
    icon: SiD3Dotjs,
    color: "red",
  },
];
