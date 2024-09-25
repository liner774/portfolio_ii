import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "Game Dev", "Artist"];
  const period = 2000;

  const onButtonClick = () => {
    const pdfUrl = `${process.env.PUBLIC_URL}/CV_NyiLynnSet.pdf`;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute('download', 'CV_NyiLynnSet.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>{`Hi! I'm Lynn, `}<br /> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "Game Dev", "Artist" ]'><span className="wrap">{text}</span></span></h1>
                  
                  {/* Background blur wrapper for paragraph */}
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.2)', 
                    backdropFilter: 'blur(10px)',
                    padding: '20px',
                    borderRadius: '10px',
                    marginTop: '20px'
                  }}>
                    <p style={{ color: '#fff', fontWeight: '500' }}>
                      Hey there! I'm <b style={{ color: '#fad374' }}>Nyi Lynn Set</b>, a new developer with a passion for building user-friendly websites.
                      I've spent my studies mastering clean code and design that delivers a smooth experience for users.
                      I thrive in team settings and enjoy turning ideas into real-world solutions.
                      <b style={{ color: '#091b35' }}>Thanks for checking out my portfolio! I'm excited to chat about any opportunities you have in mind!</b>
                    </p>
                  </div>

                  <Button variant="outline-light" onClick={onButtonClick} className="bounce-animation">
                    Download CV
                  </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
