import Swal from 'sweetalert2';
import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.gif";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import contactBg from '../assets/img/contact-bg.jpg';

export const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');

  const onSubmit = async (event) => {
    event.preventDefault();
    setButtonText('Sending...');
    
    const formData = new FormData(event.target);
    formData.append("access_key", "d0cde1a5-0b52-421e-bbd1-6d4ea0635845");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    const swalStyles = `
      .swal2-confirm {
        background-color: #264d73 !important;
        color:  #fdf9e7 !important;
      }
    `;

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message Sent Successfully!",
        icon: "success",
        customClass: {
          confirmButton: 'swal2-confirm'
        },
        didOpen: () => {
          const style = document.createElement('style');
          style.innerHTML = swalStyles;
          document.head.appendChild(style);
        },
        didClose: () => {
          document.head.querySelector('style').remove();
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        customClass: {
          confirmButton: 'swal2-confirm'
        },
        didOpen: () => {
          const style = document.createElement('style');
          style.innerHTML = swalStyles;
          document.head.appendChild(style);
        },
        didClose: () => {
          document.head.querySelector('style').remove();
        }
      });
    }

    setButtonText('Send');
  };

  return (
    <section className="contact" id="connect" style={{
      backgroundImage: `url(${contactBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      padding: '50px 0'
    }}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" id='bird' />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div>
                  <h2 style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}>Get In Touch</h2>
                  <form onSubmit={onSubmit}>
                    <Row>
                      <Col size={12} sm={12} className="px-1">
                        <input type="text" name="Name" placeholder="Name" required/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="email" placeholder="Email Address"  required/>
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="tel" name="tel" placeholder="Phone No." required/>
                      </Col>
                      <Col size={12} className="px-1 ">
                        <textarea name="message" rows="6" placeholder="Message"required></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
