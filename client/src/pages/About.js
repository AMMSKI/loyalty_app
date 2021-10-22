import React from "react";
import { Card as div, Image } from "semantic-ui-react";

import styled from 'styled-components';

const Style = styled.div`
  color: white;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 30px;
  }

  .profile {
    width: 300px;
    margin-bottom: 50px;

    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .first-name, p {
      margin-top: 10px;
    }
  }
`;

const About = () => {

  const description = [
    "Fall 2021 Graduate. Looking forward to the new adventure of being a web developer!",
    "Love to code, play golf and hang out with my family.",
    "Excited to keep learning and growing web development and plans to be a front end developer. Dev Point Labs Fall 2021 graduate.",
    "hkjfds",
    "Fall 2021 Graduate. I look forward to being a web developer by day, game designer by night."
  ];

  return (
    <Style>
      <h1>About the Coders!</h1>

      <div className="profile">
        <Image width="300" src="/images/elise.jpg" />
        <b className="first-name">Elise</b>
        <p>{description[0]}</p>
      </div>

      <div className="profile">
        <Image width="300" src="/images/alan.png" />
        <b className="first-name">Alan</b>
        <p>{description[1]}</p>
      </div>

      <div className="profile">
        <Image width="300" src="/images/rafael.jpeg" />
        <b className="first-name">Rafael</b>
        <p>{description[3]}</p>
      </div>

      <div className="profile">
        <Image width="300" src="/images/kelsey.gif" />
        <b className="first-name">Kelsey</b>
        <p>{description[3]}</p>
      </div>

      <div className="profile">
        <Image width="300" src="/images/lee.png" />
        <b className="first-name">Lee</b>
        <p>{description[4]}</p>
      </div>

      
    </Style>
  )

}




export default About;