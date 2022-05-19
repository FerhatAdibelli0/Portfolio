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
              description=" to share ... t with friends build with React.js, NodeJs, and Herouke. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              link="https://shopapp-unseparated-fullstack.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ingrediants}
              isBlog={false}
              title="Ingrediants"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link="https://ferhatadibelli0.github.io/IngrediantsApp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={quates}
              isBlog={false}
              title="Quates.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://ferhatadibelli0.github.io/QuateApp/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expences}
              isBlog={false}
              title="Expences"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://ferhatadibelli0.github.io/expence-app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={furnitures}
              isBlog={false}
              title="Furnitures"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://ferhatadibelli0.github.io/Furniture-Redux-App/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={animation}
              isBlog={false}
              title="Small Animation"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              link="https://ferhatadibelli0.github.io/Animation-React-App/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
