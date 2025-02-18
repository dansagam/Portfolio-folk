import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

const projectMock = () => [
  {
    image: "https://res.cloudinary.com/du7qw0hpn/image/upload/v1739851733/saving-image_wvjk9t.png",
    title: "Savings banking Application (Lead Frontend, Supporting Backend - Django)",
    description:
      "This platform help the MFB to manage the wallet transactions and the saving and investment plan customer using the bank primarily",
    github: "https://github.com/capitalsagetechnology/savings-web",
    demo: "https://savings-dev.netlify.app/login",
  },
  {
    image: "https://res.cloudinary.com/du7qw0hpn/image/upload/v1739851875/titan-agency_yue4s7.png",
    title: "Agency Banking Gambia App (Lead Frontend, Supporting Backend -Django)",
    description:
      "This platform help to  manage agent and merchant of the micro-finance bank and the tracking of transactions and location of terminals in Gambia ",
    github: "https://github.com/capitalsagetechnology/gmb-titan-web",
    demo: "https://titan-agency.netlify.app/login",
  },
  {
    image: "https://res.cloudinary.com/du7qw0hpn/image/upload/v1739851733/phlox-image_dsvrfh.png",
    title: "Agency Bankin App (Lead Frontend)",
    description:
      "This platform help to  manage agent and merchant of the micro-finance bank and the tracking of transactions and location of terminals",
    github: "https://github.com/capitalsagetechnology/agency-central-web",
    demo: "https://phloxpay-dev.netlify.app/login",
  },
  {
    image: "https://res.cloudinary.com/du7qw0hpn/image/upload/v1729020519/spotflow-image.png",
    title: "Spotflow Seamless Payment (Lead Frontend)",
    description:
      "This platform helps with seamless payment accross border and for renewal of payment subscriptions management, collection management and settlements",
    github: "https://github.com/Spotflow-One/payment-gateway-frontend",
    demo: "https://api-integration.d18r19vvqh1a7y.amplifyapp.com/login",
  },
  {
    image: "https://res.cloudinary.com/du7qw0hpn/image/upload/v1739851733/sagecloud-image_qw44pg.png",
    title: "Sagecloud Web (Lead Frontend)",
    description: "This platform help to manage the various VAS and inter bank transfer transactions (ongoing)",
    github: "https://github.com/capitalsagetechnology/sagecloud-v2-web",
    demo: "https://sagecloud-dev.netlify.app/dashboard",
  },
  {
    image: "https://res.cloudinary.com/du7qw0hpn/image/upload/v1708707929/portfolio/qn6r2n2dpqazohcrknzd.png",
    title: "Edge Human resource and Payroll (Lead)",
    description:
      "A a Self Customisable Software as a Service (SaaS) Human Resource and Payroll Service Provider. Thie patform help organisation management the employees, the renumeration of the employees and and the payroll record. Activities like Promotion, leave, Loan, Voluntary contributions, recruitments and announcements are well known established process managed on the platform",
    github: "https://github.com/Prunedge-Dev-Team/keystone-hris-web",
    demo: "https://edgehr.netlify.app/signin",
  },
  {
    image: "#",
    title: "Spotflow SDK (Lead Frontend)",
    description:
      "This SDK was built with the use of vannila Js from which other SDKs (React, VueJs, AngularJs) were wrapped, this SDK is payment checkout for Merchant to seamlessly integrate with their system for subscritpion and settlment management",
    github: "https://github.com/Spotflow-One/spotflow-react-v2-checkout",
    demo: "https://www.npmjs.com/package/@spot-flow/react-spotflow-checkout",
  },
  {
    image: "https://res.cloudinary.com/du7qw0hpn/image/upload/v1729020028/nigerirs-web-image.png",
    title: "Internal Revenue System. NestJs (Backend)",
    description:
      "This is an application built with NestJs, Prisma ORM, integrated with CBS and Monify for easily tax payments and invoice generation for the State Government",
    github: "https://github.com/Prunedge-Dev-Team/nigerirs-api",
    demo: "https://nigerirs.netlify.app/sign-in",
  },
  {
    image: "https://res.cloudinary.com/du7qw0hpn/image/upload/v1708707927/portfolio/hgpcbqq8tidsbhwdvtj8.png",
    title: "Transporation Application. (Backend/Django)",
    description:
      "This is Bus Rapid transit application to help in the easy boarding of bus, it track the bus movement and the driver and the ticket of the boarded bus",
    github: "https://github.com/Prunedge-Dev-Team/korensi-api",
    demo: "https://admin.korensi.com/signin",
  },
  {
    image: "https://res.cloudinary.com/du7qw0hpn/image/upload/v1708707928/portfolio/mp4f8hye1xgtclxdkhxk.png",
    title: "Keystone Human resource and Payroll (Lead)",
    description:
      "A a Self Customisable Internal App Human Resource and Payroll for keystone Bank. Thie patform help organisation management the employees, the renumeration of the employees and and the payroll record. Activities like Promotion, leave, Loan, Voluntary contributions, recruitments and announcements are well known established process managed on the platform",
    github: "https://github.com/Prunedge-Dev-Team/keystone-hris-web",
    demo: "https://keystone-hrms-dev.netlify.app/",
  },
  {
    image: "https://res.cloudinary.com/du7qw0hpn/image/upload/v1708707929/portfolio/e373xqlntetpaxfr0zlf.png",
    title: "Stanbic Loan App (Lead)",
    description:
      "This Platform is built with ANGULARJS and NGRX. This application help people (lower class citizens) to ease the accessibility of loan by just providing information on the bvn, verification of the credit score of the bvn and disbursement of the loan amount",
    github: "https://github.com/Prunedge-Dev-Team/stanbic-upl-web",
    demo: "https://ezcash.stanbicibtc.com/EZCash9-5/onboarding/start",
  },
  {
    image: "https://res.cloudinary.com/du7qw0hpn/image/upload/v1708707927/portfolio/jjhua7t5o0iowxieuijd.png",
    title: "Mtn Internal Loan Application (Contributor)",
    description:
      "This is an internal loan application for the staffs of MTN for easy work through and process within the organisation. This Platform is built with ANGULARJS",
    github: "https://github.com/Prunedge-Dev-Team/stanbic-loan-web",
    demo: "https://stanbic-loan-dev.netlify.app/",
  },
  {
    image: "https://res.cloudinary.com/du7qw0hpn/image/upload/v1708707927/portfolio/llipc18zzfjx5ou9udri.png",
    title: "Kwara e-Procurement Application (Contributor/Lead)",
    description:
      "This application is Kwara State government of Nigeria digital procurement system to manage the budget of the state government, showing the approval process and signing of the certificates of intent and the CNO for contract. it is also the platform to help potential vendors to bill for contract",
    github: "https://github.com/Prunedge-Dev-Team/web-kwara-eprocurement",
    demo: "https://kwara-eprocurement-staging.netlify.app/",
  },
  {
    image: "https://res.cloudinary.com/du7qw0hpn/image/upload/v1708707927/portfolio/llipc18zzfjx5ou9udri.png",
    title: "Delta e-Procurement Applcation (Contributor/Lead)",
    description:
      "This application is Delta State government of Nigeria digital procurement system to manage the budget of the state government, showing the approval process and signing of the certificates of intent and the CNO for contract. it is also the platform to help potential vendors to bill for contract",
    github: "https://github.com/Prunedge-Dev-Team/eprocurement-delta-web",
    demo: "https://eprocurement-delta-staging.netlify.app/",
  },
  {
    image: "https://res.cloudinary.com/du7qw0hpn/image/upload/v1708707928/portfolio/q8rjbiee0qeymfpjgat4.png",
    title: "Delta Learning Platform. (Contributor)",
    description:
      "This is a state governemt digital learning platform for student. it carter for the materials, the examination and for the ease of learning in a multitenant platform where the school are sitting on a subdomain. The platform is built using GraphQL, React, ",
    github: "https://github.com/Prunedge-Dev-Team/delta-lms-web",
    demo: "https://dslms.ng/",
  },
  {
    image: "https://res.cloudinary.com/du7qw0hpn/image/upload/v1708707928/portfolio/omatgiljtyjtma94ahjs.png",
    title: "Nakise Learning Platform. (Contributor)",
    description:
      "This is a digital learning platform for the tutors and students. just like every other platform, you can stream your course online and rate you tutors",
    github: "https://github.com/Prunedge-Dev-Team/nakise-web",
    demo: "https://app.nakise.org/",
  },
  {
    image: "https://res.cloudinary.com/du7qw0hpn/image/upload/v1708707928/portfolio/oxhoou4q6w90bbgthhb5.png",
    title: "Ekiti State Work Process. (Django and React Developer)",
    description:
      "This is a state govermental workflow. it detail the process of signing contract, the process for the procedure and working of government and its permanent secretaries.",
    github: "https://github.com/Prunedge-Dev-Team/proworks-web",
    demo: "https://proworks-oyo.vercel.app/signin",
  },
  {
    image: "https://res.cloudinary.com/du7qw0hpn/image/upload/v1708707927/portfolio/gvdgffgd5yw45rkvjqga.png",
    title: "Nigeria Poverty Map index",
    description:
      "This application hold information about the poverty index mapping accross nigeria. it is built with NextJs and GraphQL. on this platform. you can  easily access the poverty trend going on in Nigeria.",
    github: "https://github.com/Prunedge-Dev-Team/mpi-web",
    demo: "http://staging.nigeriapovertymap.com",
  },
  {
    image: "https://res.cloudinary.com/du7qw0hpn/image/upload/v1708707928/portfolio/oxhoou4q6w90bbgthhb5.png",
    title: "Election Poll analysis application",
    description:
      "The platform help in carrying out poll analysis and sentiment analysis on your candidate using the d3 location driven poll.",
    github: "https://github.com/Prunedge-Dev-Team/polleasy-web",
    demo: "http://dats.apcregistration.com",
  },
  {
    image: "https://res.cloudinary.com/du7qw0hpn/image/upload/v1708707926/portfolio/aja7z1p8hk22rjl8pvru.png",
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
  // {
  //   image: "",
  //   title: "Ewa Station Application (Lead)",
  //   description:
  //     "This is a food vendor platfor that deliver food to client that book online. it is built with NextJs, using Google Maps",
  //   github: "",
  //   demo: "",
  // },
  {
    image: "https://res.cloudinary.com/du7qw0hpn/image/upload/v1708707926/portfolio/b1jghsvlo7oxytlyuqzh.png",
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
  // {
  //   image: "",
  //   title: "Insurance Platform Application.",
  //   description:
  //     "This is a multi-platform insurance application for the onboarding of enrollee, checking of Benefit and insurance stack. It is also a platform for the claiming of damages claims ",
  //   github: "https://github.com/Prunedge-Dev-Team/leadway-health-web",
  //   demo: "",
  // },
];
