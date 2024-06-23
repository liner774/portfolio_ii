import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>           
            {/* <a href="#"><img src={logo} alt="Logo" /></a> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <br/>
              <a href='https://www.linkedin.com/in/nyi-lynn-a6a8b92ba/' target="_blank" rel="noopener noreferrer">
                  <img src={navIcon1} alt="LinkedIn" />
                </a>               
              <a href="mailto:annliner99@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={navIcon4} alt="Phone" />
              </a>
                <a href='https://github.com/liner774' target="_blank" rel="noopener noreferrer">
                  <img src={navIcon2} alt="GitHub" />
                </a>
                <a href="tel:09692136537" target="_blank" rel="noopener noreferrer">
                  <img src={navIcon3} alt="Phone" />
                </a>
            </div>
            <p>Thank you for checking out my portfolio!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
