import React from "react";
import { Card as div, Image } from "semantic-ui-react";
import styled from 'styled-components';
import linkedin from "../images/LI-Logo.png";
import github from "../images/GH-logo.png";
import email from "../images/email.png";
import elise from "../images/elise.jpeg";
import alan from "../images/alan.jpeg";
import rafael from "../images/rafael.jpeg";
import kelsey from "../images/kelsey.jpg";
import lee from "../images/lee.jpeg";

const Style = styled.div`
  background-color: #D7272F;
  color: black;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
  
  .coder-header {
    color:white;
    padding: 20px;
  }

  a {
    text-decoration: none;
    color: white;
  }

  h1 {
    font-weight: bold;
    margin-top: 20px;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .pics {
    height: 325px;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, .7) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;  }

  .profile {
    width: 300px;
    margin: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .first-name, p {
      margin-top: 10px;
      font-weight: 600;
    }
    
    .links {
      text-align: left;
    }
    .links a {
      margin: 4px;
    }
  }
`;

const About = () => {

  const description = [
    "Looking forward to the new adventure of being a web developer!",
    "Love to code, play golf and hang out with my family.",
    "Fall 2021 Graduate. Ecuadorian living in Utah, love technology.",
    "Excited to keep learning and growing web development and plans to be a front end developer. Dev Point Labs Fall 2021 graduate.",
    "Fall 2021 Graduate. I look forward to being a web developer by day, game designer by night.",
  ];

  return (
    <Style>
      <h1 className="coder-header">Our Team</h1>
      <div className="cards">
      <div className="profile">
        <Image className="pics" width="300" src={elise} alt="Elise Brown"/>
        <h2 className="first-name">Elise Brown</h2>
        <p>{description[0]}</p>
        <div className="links">
          <a href="https://github.com/el-brown/">
            <img width="28px" src={github} />
          </a>
          <a href="mailto:elisemarie88@gmail.com">
            <img width="28px" src={email} />
          </a>
          <a href="https://www.linkedin.com/in/elisewildflower/">
            <img width="32px" src={linkedin} />
          </a>
        </div>
      </div>

      <div className="profile">
        <Image className="pics" width="300" src={alan} alt="Alan Mamulski"/>
        <h2 className="first-name">Alan Mamulski</h2>
        <p>{description[1]}</p>
        <div className="links">
          <a href="https://github.com/AMMSKI">
            <img width="28px" src={github} />
          </a>
          <a href="mailto:alanmamulski@gmail.com">
            <img width="28px" src={email} />
          </a>
          <a href="https://www.linkedin.com/in/alan-mamulski/">
            <img width="30px" src={linkedin} />
          </a>
        </div>
      </div>

      <div className="profile">
        <Image className="pics" width="300" src={rafael} alt="Raphael Briones"/>
        <h2 className="first-name">Rafael Briones</h2>
        <p>{description[2]}</p>
        <div className="links">
          <a href="https://github.com/rbrionesdev">
            <img width="28px" src={github} />
          </a>
          <a href="mailto:rafabriones88@outlook.com">
            <img width="28px" src={email} />
          </a>
          <a href="https://www.linkedin.com/in/rafael-briones-dev/">
            <img width="30px" src={linkedin} />          
          </a>
        </div>
      </div>

      <div className="profile">
        <Image className="pics" width="300" src={kelsey} alt="Kelsey Nicholes"/>
        <h2 className="first-name">Kelsey Nicholes</h2>
        <p>{description[3]}</p>
        <div className="links">
          <a href="https://github.com/BeTheNerd">
            <img width="28px" src={github} />
          </a>
          <a href="mailto:bethenerd.dev@gmail.com">
            <img width="28px" src={email} />
          </a>
          <a href="https://www.linkedin.com/in/kelseynicholes/">
            <img width="30px" src={linkedin} />
          </a>
        </div>
      </div>

      <div className="profile">
        <Image className="pics" width="300" src={lee} alt="Lee Anderson"/>
        <h2 className="first-name">Lee Anderson</h2>
        <p>{description[4]}</p>
        <div className="links">
          <a href="https://github.com/LeeAnderson007">
            <img width="28px" src={github} />
          </a>
          <a href="mailto:ecllips07@gmail.com">
            <img width="28px" src={email} />
          </a>
          <a href="https://www.linkedin.com/in/lee-anderson007/">
            <img width="30px" src={linkedin} />
          </a>
        </div>
     </div>
   </div>

      <a href="mailto:loyalburger2021@gmail.com">
      <h2>Contact Us</h2>
      </a>

    </Style>
  )

}




export default About;