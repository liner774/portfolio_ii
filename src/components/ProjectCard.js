import { Col, Button, Row } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, githubUrl, liveUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="btn-container mt-3">
            <Row className="justify-content-center">
              <Col xs="auto">
                <Button
                  variant="outline-light"
                  onClick={() => window.open(githubUrl, '_blank', 'noopener,noreferrer')}
                >
                  Github
                </Button>
              </Col>
              <Col xs="auto">
                <Button
                  variant="outline-light"
                  onClick={() => window.open(liveUrl, '_blank', 'noopener,noreferrer')}
                >
                  See Live
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </Col>
  )
}
