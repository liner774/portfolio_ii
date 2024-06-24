import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      githubUrl: "https://github.com/user/project1",
      liveUrl: "https://project1-live.com",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      githubUrl: "https://github.com/user/project2",
      liveUrl: "https://project2-live.com",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      githubUrl: "https://github.com/user/project3",
      liveUrl: "https://project3-live.com",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      githubUrl: "https://github.com/user/project4",
      liveUrl: "https://project4-live.com",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      githubUrl: "https://github.com/user/project5",
      liveUrl: "https://project5-live.com",
    },
    {
      title: "Portfolio Page",
      description: "Made with just pure HTML, CSS & JS",
      imgUrl: projImg4,
      githubUrl: "https://github.com/liner774/Portfolio.git",
      liveUrl: "https://liner774.github.io/Portfolio/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div>
                <h2>Projects</h2>
                <p>Check out my recent projects!</p>                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content >
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>To be added!╰(*°▽°*)╯</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>To be added!╰(*°▽°*)╯</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
