import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';

export const Footer = () => {
  const [showPhoneTooltip, setShowPhoneTooltip] = useState(false);
  const [showLinkedInTooltip, setShowLinkedInTooltip] = useState(false);
  const [showGitHubTooltip, setShowGitHubTooltip] = useState(false);
  const [showEmailTooltip, setShowEmailTooltip] = useState(false);

  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            {/* <a href="#"><img src={logo} alt="Logo" /></a> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <br />
              <a
                href="https://www.linkedin.com/in/nyi-lynn-a6a8b92ba/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setShowLinkedInTooltip(true)}
                onMouseLeave={() => setShowLinkedInTooltip(false)}
              >
                <img src={navIcon1} alt="LinkedIn" />
                {showLinkedInTooltip && (
                  <span className="tooltip">LinkedIn</span>
                )}
              </a>
              <a
                href="mailto:annliner99@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setShowEmailTooltip(true)}
                onMouseLeave={() => setShowEmailTooltip(false)}
              >
                <img src={navIcon4} alt="Email" />
                {showEmailTooltip && (
                  <span className="tooltip">annliner99@gmail.com</span>
                )}
              </a>
              <a
                href="https://github.com/liner774"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setShowGitHubTooltip(true)}
                onMouseLeave={() => setShowGitHubTooltip(false)}
              >
                <img src={navIcon2} alt="GitHub" />
                {showGitHubTooltip && (
                  <span className="tooltip">GitHub</span>
                )}
              </a>
              <a
                href="tel:09692136537"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setShowPhoneTooltip(true)}
                onMouseLeave={() => setShowPhoneTooltip(false)}
              >
                <img src={navIcon3} alt="Phone" />
                {showPhoneTooltip && (
                  <span className="tooltip">+959692136537</span>
                )}
              </a>
            </div>
            <p>Thank you for checking out my portfolio!</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
