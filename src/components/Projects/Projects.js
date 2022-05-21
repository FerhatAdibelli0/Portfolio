import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import expences from "../../Assets/Projects/Expences.png";
import animation from "../../Assets/Projects/animation.png";
import quates from "../../Assets/Projects/Quates.png";
import shopify from "../../Assets/Projects/Shopify.png";
import furnitures from "../../Assets/Projects/Furnitures.png";
import Ingrediants from "../../Assets/Projects/Ingrediants.png";

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
              imgPath={shopify}
              isBlog={false}
              title="Shopify"
              description="The perfect shopping app is built with Nodejs and includes MongoDB and Ejs templates. The application has many features, especially authentication and authorization. In this application, which has many up-to-date third-party packages, Stripe is used as the payment system."
              link="https://shopapp-unseparated-fullstack.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ingrediants}
              isBlog={false}
              title="Ingrediants"
              description="A restaurant web application with a great visual, built using ReactJs and ModuleCss, it is a responsive application that displays the total expenses in the cart."
              link="https://ferhatadibelli0.github.io/IngrediantsApp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quates}
              isBlog={false}
              title="Quates.io"
              description="The multi-page app is built with ReactJs using React-router. It has a responsive design using Module CSS."
              link="https://ferhatadibelli0.github.io/QuateApp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expences}
              isBlog={false}
              title="Expences"
              description="This app, which has a responsive design created with the great use of React components, also shows the expenditures dynamically according to the selected year in the diagram."
              link="https://ferhatadibelli0.github.io/expence-app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={furnitures}
              isBlog={false}
              title="Furnitures"
              description="It is a furniture shop application created using the Redux library. It has a responsive design and Module CSS is used."
              link="https://ferhatadibelli0.github.io/Furniture-Redux-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={animation}
              isBlog={false}
              title="Small Animation"
              description="It's a fun app built using react-transition-group, with an animated list and modal. You can close the animated model and start the color animation with the toggle button."
              link="https://ferhatadibelli0.github.io/Animation-React-App/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
