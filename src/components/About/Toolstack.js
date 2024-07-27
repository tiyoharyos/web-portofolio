import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode } from "react-icons/si";
import { FaFigma } from "react-icons/fa"; // Ikon Figma
import { SiDrawio } from "react-icons/si"; // Ikon Draw.io

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>
    </Row>
  );
}

export default Toolstack;
