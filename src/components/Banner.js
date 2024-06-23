import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
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
  }, [delta, loopNum, isDeleting, text]);

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
      setLoopNum(loopNum + 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Lynn, `}<br /> <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "Game Dev", "Artist" ]'><span className="wrap">{text}</span></span></h1>
                  <p>
                    Hey there! I'm <b style={{ color: '#fad374' }}>Nyi Lynn Set</b>, a fresh full stack web developer. I love building websites that users find easy to use.
                    Throughout my studies, I've focused on user-friendly design and writing clean, efficient code.
                    I enjoy teaming up with others and bringing projects to life.
                    <b style={{ color: '#091b35' }}>Thanks for checking out my portfolio! I'm excited to chat about any opportunities you have in mind!</b>
                  </p>
                  <Button variant="outline-light" onClick={onButtonClick} className="bounce-animation">
                    Download CV
                  </Button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            {/* <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
