import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import checkmark from "../assets/img/checkmark.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

// Helper function to render experience items
const renderExperienceItem = (title, levels) => (
  <article>
    <div style={{ textAlign: 'center' }}>
      <img src={checkmark} alt="Checkmark Image" style={{ height: "100px", width: "100px" }} />
      <h3>{title}</h3>
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: 'calc(50% - 50px)', width: '200px' }}>
      {levels.map((level, index) => (
        <p key={index} style={{ margin: '5px 0', textAlign: 'left' }}>{level}</p>
      ))}
    </div>
  </article>
);



  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2><p>Explore my skills!</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  {renderExperienceItem("Languages", ["HTML", "CSS", "JavaScript", "Python", "C#"])}
                </div>
                <div className="item">
                  {renderExperienceItem("Frameworks", ["Bootstrap", "jQuery", "React", "Express.js", "Node.js", "ASP.NET Core"])}
                </div>
                <div className="item">
                  {renderExperienceItem("Databases", ["MSSQL", "MongoDB"])}
                </div>
                <div className="item">
                  {renderExperienceItem("Tools / Others", ["GitHub", "GitHub Desktop", "PyCharm", "VSCode", "Visual Studio"])}
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};

