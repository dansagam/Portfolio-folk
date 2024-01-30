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
    description:
      "This Platform is built with ANGULARJS and NGRX. This application help people (lower class citizens) to ease the accessibility of loan by just providing information on the bvn, verification of the credit score of the bvn and disbursement of the loan amount",
    github: "https://github.com/Prunedge-Dev-Team/stanbic-upl-web",
    demo: "https://ezcash.stanbicibtc.com/EZCash9-5/onboarding/start",
  },
  {
    image: "",
    title: "Mtn Internal Loan Application (Contributor)",
    description:
      "This is an internal loan application for the staffs of MTN for easy work through and process within the organisation. This Platform is built with ANGULARJS",
    github: "https://github.com/Prunedge-Dev-Team/stanbic-loan-web",
    demo: "https://stanbic-loan-dev.netlify.app/",
  },
  {
    image: "",
    title: "Kwara e-Procurement Application (Contributor/Lead)",
    description:
      "This application is Kwara State government of Nigeria digital procurement system to manage the budget of the state government, showing the approval process and signing of the certificates of intent and the CNO for contract. it is also the platform to help potential vendors to bill for contract",
    github: "https://github.com/Prunedge-Dev-Team/web-kwara-eprocurement",
    demo: "https://kwara-eprocurement-staging.netlify.app/",
  },
  {
    image: "",
    title: "Delta e-Procurement Applcation (Contributor/Lead)",
    description:
      "This application is Delta State government of Nigeria digital procurement system to manage the budget of the state government, showing the approval process and signing of the certificates of intent and the CNO for contract. it is also the platform to help potential vendors to bill for contract",
    github: "https://github.com/Prunedge-Dev-Team/eprocurement-delta-web",
    demo: "https://eprocurement-delta-staging.netlify.app/",
  },
  {
    image: "",
    title: "Delta Learning Platform. (Contributor)",
    description:
      "This is a state governemt digital learning platform for student. it carter for the materials, the examination and for the ease of learning in a multitenant platform where the school are sitting on a subdomain. The platform is built using GraphQL, React, ",
    github: "https://github.com/Prunedge-Dev-Team/delta-lms-web",
    demo: "https://dslms.ng/",
  },
  {
    image: "",
    title: "Nakise Learning Platform. (Contributor)",
    description:
      "This is a digital learning platform for the tutors and students. just like every other platform, you can stream your course online and rate you tutors",
    github: "https://github.com/Prunedge-Dev-Team/nakise-web",
    demo: "https://app.nakise.org/",
  },
  {
    image: "",
    title: "Ekiti State Work Process.",
    description:
      "This is a state govermental workflow. it detail the process of signing contract, the process for the procedure and working of government and its permanent secretaries.",
    github: "https://github.com/Prunedge-Dev-Team/proworks-web",
    demo: "https://proworks-oyo.vercel.app/signin",
  },
  {
    image: "",
    title: "Nigeria Poverty Map index",
    description:
      "This application hold information about the poverty index mapping accross nigeria. it is built with NextJs and GraphQL. on this platform. you can  easily access the poverty trend going on in Nigeria.",
    github: "https://github.com/Prunedge-Dev-Team/mpi-web",
    demo: "http://staging.nigeriapovertymap.com",
  },
  {
    image: "",
    title: "Election Poll analysis application",
    description:
      "The platform help in carrying out poll analysis and sentiment analysis on your candidate using the d3 location driven poll.",
    github: "https://github.com/Prunedge-Dev-Team/polleasy-web",
    demo: "http://dats.apcregistration.com",
  },
  {
    image: "",
    title: "Transporation Application. (Backend/Django)",
    description:
      "This is Bus Rapid transit application to help in the easy boarding of bus, it track the bus movement and the driver and the ticket of the boarded bus",
    github: "https://github.com/Prunedge-Dev-Team/korensi-api",
    demo: "",
  },
  {
    image: "",
    title: "Government Budget Platform.",
    description:
      "This is federal government project to keep storage of the budget of each year of government. it is built with ReactJs, React-query",
    github: "https://github.com/Prunedge-Dev-Team/budgit-web",
    demo: "https://bnpdev.netlify.app/citizens/overview",
  },
  // {
  //   image: "",
  //   title: "Petroluem Pump Map Application",
  //   description: "",
  //   github: "",
  //   demo: "",
  // },
  {
    image: "",
    title: "Ewa Station Application (Lead)",
    description:
      "This is a food vendor platfor that deliver food to client that book online. it is built with NextJs, using Google Maps",
    github: "",
    demo: "",
  },
  {
    image: "",
    title: "Church Process Application. (Lead)",
    description:
      "This is application to help the church and its leadership to monitor the number of soul won, the offering and tithe. the attendance of the workforce. This platform is built with ReactJs and GraphQL",
    github: "https://github.com/Clchub/CLCHUB-client",
    demo: "https://clchub-web-staging.netlify.app/signin",
  },
  {
    image: "",
    title: "Boosta Online Shopper platform",
    description: "This is an online retail shop platform for sale of goods and commodity products",
    github: "https://github.com/Prunedge-Dev-Team/rms-web",
    demo: "https://boosta.ng/",
  },
  {
    image: "",
    title: "Insurance Platform Application.",
    description:
      "This is a multi-platform insurance application for the onboarding of enrollee, checking of Benefit and insurance stack. It is also a platform for the claiming of damages claims ",
    github: "https://github.com/Prunedge-Dev-Team/leadway-health-web",
    demo: "",
  },
];
