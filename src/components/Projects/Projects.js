import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {projectMock().map(({ demo, description, github, image, title }, idx) => (
            <Col md={4} className="project-card" key={`${idx}`}>
              <ProjectCard
                imgPath={image}
                isBlog={false}
                title={title}
                description={description}
                ghLink={github}
                demoLink={demo}
              />
            </Col>
          ))}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

const projectMock = () => [
  {
    image: "",
    title: "Edge Human resource and Payroll (Lead)",
    description:
      "A a Self Customisable Software as a Service (SaaS) Human Resource and Payroll Service Provider. Thie patform help organisation management the employees, the renumeration of the employees and and the payroll record. Activities like Promotion, leave, Loan, Voluntary contributions, recruitments and announcements are well known established process managed on the platform",
    github: "https://github.com/Prunedge-Dev-Team/keystone-hris-web",
    demo: "https://edgehr.netlify.app/signin",
  },
  {
    image: "",
    title: "Keystone Human resource and Payroll (Lead)",
    description:
      "A a Self Customisable Internal App Human Resource and Payroll for keystone Bank. Thie patform help organisation management the employees, the renumeration of the employees and and the payroll record. Activities like Promotion, leave, Loan, Voluntary contributions, recruitments and announcements are well known established process managed on the platform",
    github: "https://github.com/Prunedge-Dev-Team/keystone-hris-web",
    demo: "https://keystone-hrms-dev.netlify.app/",
  },
  {
    image: "",
    title: "Stanbic Loan App (Lead)",
    description: "",
    github: "https://github.com/Prunedge-Dev-Team/stanbic-upl-web",
    demo: "https://ezcash.stanbicibtc.com/EZCash9-5/onboarding/start",
  },
  {
    image: "",
    title: "Mtn Internal Loan Application (Contributor)",
    description: "",
    github: "https://github.com/Prunedge-Dev-Team/stanbic-loan-web",
    demo: "https://stanbic-loan-dev.netlify.app/",
  },
  {
    image: "",
    title: "Kwara e-Procurement Application (Contributor/Lead)",
    description: "",
    github: "https://github.com/Prunedge-Dev-Team/web-kwara-eprocurement",
    demo: "https://kwara-eprocurement-staging.netlify.app/",
  },
  {
    image: "",
    title: "Delta e-Procurement Applcation (Contributor/Lead)",
    description: "",
    github: "https://github.com/Prunedge-Dev-Team/eprocurement-delta-web",
    demo: "https://eprocurement-delta-staging.netlify.app/",
  },
  {
    image: "",
    title: "Delta Learning Platform. (Contributor)",
    description: "",
    github: "",
    demo: "",
  },
  {
    image: "",
    title: "Ekiti State Work Process.",
    description: "",
    github: "",
    demo: "",
  },
  {
    image: "",
    title: "Nigeria Poverty Map index",
    description: "",
    github: "",
    demo: "",
  },
  {
    image: "",
    title: "Election Poll analysis application",
    description: "",
    github: "",
    demo: "",
  },
  {
    image: "",
    title: "Transporation Application. (Backend/Django)",
    description: "",
    github: "",
    demo: "",
  },
  {
    image: "",
    title: "Government Budget Platform.",
    description: "",
    github: "",
    demo: "",
  },
  {
    image: "",
    title: "Petroluem Pump Map Application",
    description: "",
    github: "",
    demo: "",
  },
  {
    image: "",
    title: "Ewa Station Application (Lead)",
    description: "",
    github: "",
    demo: "",
  },
  {
    image: "",
    title: "Church Process Application. (Lead)",
    description: "",
    github: "",
    demo: "",
  },
  {
    image: "",
    title: "Online Shopper platform",
    description: "",
    github: "",
    demo: "",
  },
  {
    image: "",
    title: "Insurance Platform Application.",
    description: "",
    github: "",
    demo: "",
  },
  {
    image: "",
    title: "",
    description: "",
    github: "",
    demo: "",
  },
];
