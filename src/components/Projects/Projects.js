import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import iot from "../../Assets/Projects/iot.png";
import nyolo from "../../Assets/Projects/nyolo.png";
import warunglaris from "../../Assets/Projects/warunglaris.png";
import tokobuku from "../../Assets/Projects/image.png"


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iot}
              isBlog={false}
              title="Monitoring Data Iot"
              description="Monitoring Data IoT ini adalah sebuak aplikasi berbasis website yang menampilkan data dari alat IOT terlebih khusus dari alat Wemos D1 R32, DHT11 dan Capacitive Soil Moisture sensor."
              ghLink="https://github.com/tiyoharyos/monitoring-data-iot"
              demoLink="https://monitoring-data-iot.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nyolo}
              isBlog={false}
              title="Nyolo Pilem"
              description="Nyolo Pilem merupakan website yang berisikan film film yang sedang tranding saat ini"
              ghLink="https://github.com/tiyoharyos/nyolo_pilem"
              demoLink="https://nyolo-pilem.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={warunglaris}
              isBlog={false}
              title="Warung Laris"
              description="Web ini merupakan website dari salah satu UMKM diBandung. UMKM ini menjual bebagai kebutuhan hidup seperti : mi instan, sayuran, kebutuhan mandi, dan lain lain."
              ghLink="https://github.com/tiyoharyos/warunglaris"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tokobuku}
              isBlog={false}
              title="Toko Buku"
              description="Projek Web ini merupakan hasil pembelajaran saya mengenai react.js untuk forntend, node.js sebagai backend dan MySQL sebagai database"
              ghLink="https://github.com/tiyoharyos/TokoBuku"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
